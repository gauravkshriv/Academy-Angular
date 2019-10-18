import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class McqService{
  uuid:any;
  username:any;
  email:any;
  public  marks :any;
    constructor (private http: HttpClient){
        this.uuid= localStorage.getItem("uuid");
  this.username = localStorage.getItem("username");
  this.email = localStorage.getItem("email");
}


    //################################################

    Getpost() {
      console.log("User Login detail on check user clicked..........")
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
      let options = new RequestOptions({ headers: headers});
        return this.http.get('./assets/jsonformatter.json')
     
    }
  

    ////////###############################3333333333333

    // ///////////////////////////////////////////////////////////////////////

    public submitData(questionvalue){
        var selectedAnswer = questionvalue.filter(function(question, index) {
          return question["answer"] != undefined;
        }).map(function(question, index) {
          var idd = question["id"];
          var answer = question["answer"]; 
          var answeredObject = {};
          answeredObject[idd] = answer;
          return answeredObject;
        });
           
        var finalSelecteAnswoer = {
          'uuid':this.uuid,
          'email':this.email,
          'username':this.username
        };
        selectedAnswer.forEach(element => {
          for(var x in element)
          {
            finalSelecteAnswoer[x]=element[x];
          }
          finalSelecteAnswoer["id"]="";
        });
        var ajaxData = {
          'answers': finalSelecteAnswoer
        }
        console.log("ajax Data: ",ajaxData);
       return this.http.post("http://academy.us-east-2.elasticbeanstalk.com/submit", finalSelecteAnswoer)
      }

};