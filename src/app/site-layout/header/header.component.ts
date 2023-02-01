import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { TravelserviceService } from 'src/app/travelservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  registerForm !: FormGroup;
  myForm !: FormGroup;


  // msgs: any;
  // progress: any;
  name: any;
  email: any;
  password: any;
  place: any;
  selectedFile!: File;
  mobile: any;
  city: any;
  country: any
  pincode: any
  state: any
  Formgroup: any;

  alert = false;
  alert1 = false;



  // @Output() closeModalEvent = new EventEmitter<boolean>();





  constructor(private formBuilder: FormBuilder, private authservice: AuthServiceService, private http: HttpClient, private route: Router, public tservice: TravelserviceService) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      image: [null, Validators.required],
      place: ['', Validators.required,],
      mobile: ['', Validators.required],
      city: ['', Validators.required,],
      country: ['', Validators.required,],
      pincode: ['', Validators.required,],
      state: ['', Validators.required,]
    });

  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  loginProcess() {

    if (this.myForm.valid) {
      this.authservice.onLogin(this.myForm.value);
      // localStorage.getItem('token')
    
    }
    
    else{
      // alert('input fields correctly')
      this.alert = true;
    }
    this.myForm.reset();

    
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  login() {
    // this.router.navigateByUrl('login')

   return localStorage.getItem('currentUser');
   this.alert1 = true;


  }




  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  //








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

    if (this.registerForm.valid == !true) {
      alert('enter fields in correct format')
    }
    else {

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
      );
    }

  }


}





