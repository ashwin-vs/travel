import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelserviceService } from 'src/app/travelservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  registerForm !: FormGroup;

  // msgs: any;
  // progress: any;
  name :any;
  email: any;
  password: any;
  place: any;
  selectedFile!: File;
  mobile: any;
  city: any;
  country: any
  pincode: any
  state: any


  // @Output() closeModalEvent = new EventEmitter<boolean>();





  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router, public tservice: TravelserviceService) {
    this.registerForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]], 
       email: ['',Validators.required],
      password: ['', Validators.required],
      image: [null, Validators.required],
      place: ['', Validators.required,],
      mobile:['',Validators.required],
      city:['', Validators.required,],
      country:['', Validators.required,],
      pincode:['', Validators.required,],
      state:['', Validators.required,]
    });
  }

  ngOnInit(): void {


  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // onFileChanged(event:any) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       this.registerForm.patchValue({
  //         image: reader.result
  //       });
  //     };
  //   }
  // }
 







  onSubmit() {
    // create a FormData object to send the image file and user data
    
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('place', this.place);
    formData.append('mobile', this.mobile);
    formData.append('city', this.city);
    formData.append('country', this.country);
    formData.append('pincode', this.pincode);
    formData.append('state', this.state);
  
    if (this.registerForm.valid==!true){
      alert('enter fields in correct format')
    }
   else{

    // send a POST request to the API endpoint
    this.http.post('https://travelsitenode.onrender.com/api/v1/user/registerUser', formData).subscribe(
      (response) => {
        alert('registration successfull');
        this.route.navigateByUrl('');
        this.registerForm.reset();
        

        console.log(response);
      },
      (error) => {
        console.log(error);
        alert('invalid mail id or email id has already been used')
      }
    );}
    
  }


}
  // uploadFile(event: any) {
  //   const file = event?.target.files ? event.target.files[0] : '';
  //   console.log(file);

  //   this.form.patchValue({
  //     image: file
  //   });
  //   this.form.get('image')?.updateValueAndValidity()
  // }

  // signUp() {
  //   this.http.post<any>("https://travelsitenode.onrender.com/api/v1/user/registerUser", this.form.value).subscribe(res => {
  //     alert("registration successfull 0");
  //     this.form.reset();
  //     this.route.navigate([''])
  //   }, err => {
  //     alert("maryadak cheyyada mone")
  //   }
  //   )
  // }
  // signUp() {
  //   this.tservice.imageupload(
  //     this.form.value.name,
  //     this.form.value.email,
  //     this.form.value.password,
  //     this.form.value.place,
  //     this.form.value.image,
  //     this.form.value.number,
  //     this.form.value.city,
  //     this.form.value.country,
  //     this.form.value.pincode,
  //     this.form.value.state,
  //   ).subscribe((event: HttpEvent<any>) => {
  //     switch (event.type) {
  //       case HttpEventType.UploadProgress:
  //         if (event.total) {
  //           this.progress = Math.round((100 / event.total) * event.loaded);
  //           this.msgs = `uploaded! $(this.progress)%`;
  //         }
  //         break;
  //         case HttpEventType.Response:
  //           event.body;
  //           console.log(event.body);

  //     }
  //   })
  // }




