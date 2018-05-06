import React, { Component } from 'react';
import './App.css';
import bat from './images/bat.png';
import cry from './images/cry.png';
import fan from './images/fan.png';
import owl from './images/owl.png';
import tie from './images/tie.png';

var score = 0;
var answers = [bat, cry, fan, owl, tie];
var answertext = ['BAT', 'CRY', 'FAN', 'OWL', 'TIE'];
var filled = [0,0,0];
var fill = 0;
var h = '';

export default class App extends Component {
  constructor(props) {
        super(props);
        var ans = answertext[score];
        var text = ['a','b','c','d','e'];
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < 5; i++)
          text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
        var a = 5;
        var b = 5;
        var c = 5;
        while(a === b || b === c || a === c){
          a = Math.floor(Math.random() * 5);
          b = Math.floor(Math.random() * 5);
          c = Math.floor(Math.random() * 5);
        }
        text[a] = ans[0];
        text[b] = ans[1];
        text[c] = ans[2];
        this.state = {
          page: 0,
          sa : text[0],
          sb : text[1],
          sc : text[2],
          sd : text[3],
          se : text[4],
          aa:'',
          ab:'',
          ac:'',
        };
      }

    play = () => {
      score = 0;
		  this.setState(
        { page: 1 }
      );
    };

    replay = () => {
      score = 0;
      filled = [0,0,0];
		  this.setState(
        { page: 0 }
      );
    };

    UnMark = (item) => {
      document.getElementById('a'+item).classList.remove("fill");
      document.getElementById('a'+item).classList.add("empty");
      var flag = 0
      var p = '';
      if(item === 1 && this.state.aa !== ""){
        p = this.state.aa;
        flag = 1;
        filled[item-1] = 0;
        this.setState(
          {aa: ""}
        );
      }
      else if(item === 2 && this.state.ab !== ""){
        p = this.state.ab;
        flag = 1;
        filled[item-1] = 0;
        this.setState(
          {ab: ""}
        );
      }
      else if(item === 3 && this.state.ac !== ""){
        p = this.state.ac;
        flag = 1;
        filled[item-1] = 0;
        this.setState(
          {ac: ""}
        );
        h = '';
      }
      if(flag === 1){
        if(this.state.sa === ""){
          this.setState(
            {sa: p}
          );
          document.getElementById('s1').classList.add("fill");
          document.getElementById('s1').classList.remove("empty");
        }
        else if(this.state.sb === ""){
          this.setState(
            {sb: p}
          );
          document.getElementById('s2').classList.add("fill");
          document.getElementById('s2').classList.remove("empty");
        }
        else if(this.state.sc === ""){
          this.setState(
            {sc: p}
          );
          document.getElementById('s3').classList.add("fill");
          document.getElementById('s3').classList.remove("empty");
        }
        else if(this.state.sd === ""){
          this.setState(
            {sd: p}
          );
          document.getElementById('s4').classList.add("fill");
          document.getElementById('s4').classList.remove("empty");
        }
        else if(this.state.se === ""){
          this.setState(
            {se: p}
          );
          document.getElementById('s5').classList.add("fill");
          document.getElementById('s5').classList.remove("empty");
        }
      }
    }

    Mark = (item) => {
      document.getElementById('s'+item).classList.remove("fill");
      document.getElementById('s'+item).classList.add("empty");
      fill = 0;
      while(filled[fill] !== 0 && fill !== 3){
        fill++
      }
      if(item === 1 && this.state.sa !== ""){
        if(fill === 0){
          this.setState(
            {aa: this.state.sa}
          );
        }
        else if(fill === 1){
          this.setState(
            {ab: this.state.sa}
          );
        }
        else if(fill === 2){
          this.setState(
            {ac: this.state.sa}
          );
          h = this.state.sa;
        }
        document.getElementById('a'+String(fill+1)).classList.add("fill");
        document.getElementById('a'+String(fill+1)).classList.remove("empty");
        this.setState(
          {sa: ""}
        );
        filled[fill] = 1;
      }
      else if(item === 2 && this.state.sb !== ""){
        if(fill === 0){
          this.setState(
            {aa: this.state.sb}
          );
        }
        else if(fill === 1){
          this.setState(
            {ab: this.state.sb}
          );
        }
        else if(fill === 2){
          this.setState(
            {ac: this.state.sb}
          );
          h = this.state.sb;
        }
        document.getElementById('a'+String(fill+1)).classList.add("fill");
        document.getElementById('a'+String(fill+1)).classList.remove("empty");
        this.setState(
          {sb: ""}
        );
        filled[fill] = 1;
      }
      else if(item === 3 && this.state.sc !== ""){
        if(fill === 0){
          this.setState(
            {aa: this.state.sc}
          );
        }
        else if(fill === 1){
          this.setState(
            {ab: this.state.sc}
          );
        }
        else if(fill === 2){
          this.setState(
            {ac: this.state.sc}
          );
          h = this.state.sc;
        }
        document.getElementById('a'+String(fill+1)).classList.add("fill");
        document.getElementById('a'+String(fill+1)).classList.remove("empty");
        this.setState(
          {sc: ""}
        );
        filled[fill] = 1;
      }
      else if(item === 4 && this.state.sd !== ""){
        if(fill === 0){
          this.setState(
            {aa: this.state.sd}
          );
        }
        else if(fill === 1){
          this.setState(
            {ab: this.state.sd}
          );
        }
        else if(fill === 2){
          this.setState(
            {ac: this.state.sd}
          );
          h = this.state.sd;
        }
        document.getElementById('a'+String(fill+1)).classList.add("fill");
        document.getElementById('a'+String(fill+1)).classList.remove("empty");
        this.setState(
          {sd: ""}
        );
        filled[fill] = 1;
      }
      else if(item === 5 && this.state.se !== ""){
        if(fill === 0){
          this.setState(
            {aa: this.state.se}
          );
        }
        else if(fill === 1){
          this.setState(
            {ab: this.state.se}
          );
        }
        else if(fill === 2){
          this.setState(
            {ac: this.state.se}
          );
          h = this.state.se;
        }
        document.getElementById('a'+String(fill+1)).classList.add("fill");
        document.getElementById('a'+String(fill+1)).classList.remove("empty");
        this.setState(
          {se: ""}
        );
        filled[fill] = 1;
      }
      fill = 0;
      while(filled[fill] !== 0 && fill !== 3){
        fill++
      }
      if(fill === 3){
        var rendAns = this.state.aa + this.state.ab + h;
        if(rendAns === answertext[this.state.page-1]){
          if(score !== 4){
            document.getElementById('s1').classList.add("green");
            document.getElementById('s2').classList.add("green");
            document.getElementById('s3').classList.add("green");
            document.getElementById('s4').classList.add("green");
            document.getElementById('s5').classList.add("green");
            setTimeout(function(){
              document.getElementById('s1').classList.remove("green");
              document.getElementById('s2').classList.remove("green");
              document.getElementById('s3').classList.remove("green");
              document.getElementById('s4').classList.remove("green");
              document.getElementById('s5').classList.remove("green");
            },300);
          }
          this.setState(
            {page:this.state.page+1}
          );
          filled = [0,0,0];
          score++;
          if(score < 5){
            var ans = answertext[score];
            var text = ['a','b','c','d','e'];
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < 5; i++)
              text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
            var a = 5;
            var b = 5;
            var c = 5;
            while(a === b || b === c || a === c){
              a = Math.floor(Math.random() * 5);
              b = Math.floor(Math.random() * 5);
              c = Math.floor(Math.random() * 5);
            }
            text[a] = ans[0];
            text[b] = ans[1];
            text[c] = ans[2];
            this.setState({
              sa : text[0],
              sb : text[1],
              sc : text[2],
              sd : text[3],
              se : text[4],
              aa:'',
              ab:'',
              ac:'',
            });
            for (var p = 1; p < 4; p++) {
              document.getElementById('a'+p).classList.remove("fill");
              document.getElementById('a'+p).classList.add("empty");
            }
            for (p = 1; p < 6; p++) {
              document.getElementById('s'+p).classList.add("fill");
              document.getElementById('s'+p).classList.remove("empty");
            }
          }
          else{
            score = 0;
            filled = [0,0,0];
            ans = answertext[score];
            text = ['a','b','c','d','e'];
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (i = 0; i < 5; i++)
              text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
            a = 5;
            b = 5;
            c = 5;
            while(a === b || b === c || a === c){
              a = Math.floor(Math.random() * 5);
              b = Math.floor(Math.random() * 5);
              c = Math.floor(Math.random() * 5);
            }
            text[a] = ans[0];
            text[b] = ans[1];
            text[c] = ans[2];
            this.setState({
              sa : text[0],
              sb : text[1],
              sc : text[2],
              sd : text[3],
              se : text[4],
              aa:'',
              ab:'',
              ac:'',
            });
            for (p = 1; p < 4; p++) {
              document.getElementById('a'+p).classList.remove("fill");
              document.getElementById('a'+p).classList.add("empty");
            }
            for (p = 1; p < 6; p++) {
              document.getElementById('s'+p).classList.add("fill");
              document.getElementById('s'+p).classList.remove("empty");
            }
            this.setState({
              page:6
            });
          }
        }
        else{
          document.getElementById('s1').classList.add("red");
          document.getElementById('s2').classList.add("red");
          document.getElementById('s3').classList.add("red");
          document.getElementById('s4').classList.add("red");
          document.getElementById('s5').classList.add("red");
          setTimeout(function(){
            document.getElementById('s1').classList.remove("red");
            document.getElementById('s2').classList.remove("red");
            document.getElementById('s3').classList.remove("red");
            document.getElementById('s4').classList.remove("red");
            document.getElementById('s5').classList.remove("red");
            },300);
            filled = [0,0,0];
            ans = answertext[score];
            text = ['a','b','c','d','e'];
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (i = 0; i < 5; i++)
              text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
            a = 5;
            b = 5;
            c = 5;
            while(a === b || b === c || a === c){
              a = Math.floor(Math.random() * 5);
              b = Math.floor(Math.random() * 5);
              c = Math.floor(Math.random() * 5);
            }
            text[a] = ans[0];
            text[b] = ans[1];
            text[c] = ans[2];
            this.setState({
              sa : text[0],
              sb : text[1],
              sc : text[2],
              sd : text[3],
              se : text[4],
              aa:'',
              ab:'',
              ac:'',
            });
            for (p = 1; p < 4; p++) {
              document.getElementById('a'+p).classList.remove("fill");
              document.getElementById('a'+p).classList.add("empty");
            }
            for (p = 1; p < 6; p++) {
              document.getElementById('s'+p).classList.add("fill");
              document.getElementById('s'+p).classList.remove("empty");
            }
        }
      };
    };

    render() {
      if (this.state.page === 0) {
        return (
            <div className="Home">
              <div className="top">
                <h1>4 Pic 1 Word</h1>
              </div>
              <div className="bottom">
                <h3 onClick={ this.play }className="player">PLAY</h3>
              </div>
            </div>
          );
        }
        else if (this.state.page === 6) {
          return (
              <div className="Home">
                <div className="top">
                  <h1>Congratulations!</h1>
                </div>
                <div className="bottom">
                  <h3 onClick={ this.replay } className="player">Replay</h3>
                </div>
              </div>
            );
          }
        else{
          return(
            <div className="wrapper">
              <img className="image" src={answers[this.state.page-1]} alt=""></img>
              <div className="controls">
                <div className="ans">
                  <div className="box empty" onClick={ ()=>this.UnMark(1) } id="a1">{this.state.aa}</div>
                  <div className="box empty" onClick={ ()=>this.UnMark(2) } id="a2">{this.state.ab}</div>
                  <div className="box epmty" onClick={ ()=>this.UnMark(3) } id="a3">{this.state.ac}</div>
                </div>
                <div className="select">
                  <div className="box fill" onClick={ ()=>this.Mark(1) } id="s1">{this.state.sa}</div>
                  <div className="box fill" onClick={ ()=>this.Mark(2) } id="s2">{this.state.sb}</div>
                  <div className="box fill" onClick={ ()=>this.Mark(3) } id="s3">{this.state.sc}</div>
                  <div className="box fill" onClick={ ()=>this.Mark(4) } id="s4">{this.state.sd}</div>
                  <div className="box fill" onClick={ ()=>this.Mark(5) } id="s5">{this.state.se}</div>
                </div>
              </div>
            </div>
          );
        }
    }
}
