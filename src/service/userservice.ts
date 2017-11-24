import { Activity } from './../models/activity';
import { KnowledgePlatform } from './../models/knowledgeplatform';
import { Faculty } from './../models/faculty';
import { University } from './../models/university';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Courses } from './../models/courses';
import firebase from 'firebase';
import 'rxjs/Rx';

@Injectable()
export class UserService{

    courses: Courses[] = [];
    university: University[] = [];
    faculty: Faculty[] = [];
    query: KnowledgePlatform[] = [];
    acitivities: Activity[] = [];

    constructor(private http: Http){}



   getCourses(){
    return this.http.get('https://educal-865eb.firebaseio.com/Course.json')
        .map((response: Response) => {
            const courses: Courses[] = response.json() ? response.json() : [];
            return courses;
        })
        .do((courses: Courses[]) => {
            if(courses){
                this.courses = courses;
            }
        });
   }

   getUniversity(){
       return this.http.get('https://educal-865eb.firebaseio.com/University.json')
        .map((response: Response) => {
            const university: University[] = response.json() ? response.json() : [];
            return university;
        })
        .do((university: University[]) => {
            if(university){
                this.university = university;
            }
        });
   }

   getFaculty(){
       return this.http.get('https://educal-865eb.firebaseio.com/Faculty.json')
        .map((response: Response) => {
            const faculty: Faculty[] = response.json() ? response.json() : [];
            return faculty;
        })
        .do((faculty: Faculty[]) => {
            if(faculty){
                this.faculty = faculty;
            }
        });
   }

   searchCourse(searchStr: string){
       return firebase.database().ref('Course/'+ searchStr).once('value');
   }

 
   addPost(post: any){
       
       
    return this.http.post('https://educal-865eb.firebaseio.com/Post.json',{'query':post,'comments':null})
        .map((response:Response) =>{
            
            return response.json();
        })
        
        
   }

   getPost(){
       return this.http.get('https://educal-865eb.firebaseio.com/Post.json')
            .map((response:Response)=>{
                return response.json();
            })
            .do((data)=>{
                this.query = data;
            });
   }

   getActivity(){
    return this.http.get('https://educal-865eb.firebaseio.com/Activity.json')
        .map((response:Response)=>{
            return response.json()
        })
        .do((data)=>{
            this.acitivities = data;
        })
   }

   addComments(comment:any){
       
   }
}