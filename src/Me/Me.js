import { ThemeProvider } from '@emotion/react';
import BlogsPreview from '../Blogs/BlogsPreview';
import './Me.css';
const Me = () => {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
    
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    
    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    
    return (
        <>
        <div className="me">
            <div className="laptop">
                <div className="laptop-screen">
  <div className="laptop-content">
    <ul className="sublime">
       <li className="buttons"></li>
       <li><span className="gray"><i>/* Introducing Me */</i></span></li>
        <li>
            <span className="green">def </span><span className="purple">sayHello</span><span className="white">():</span>
        </li>
        <li>
            &emsp;<span className="blue">print</span><span className="white">(</span><span className="orange">"</span>
            <span className="typewriter-component">
                  <span className="typewrite yellow" data-period="2000" data-type='[ "Hi, I am Pragati.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
                      <span className="wrap"></span>
                  </span>
            </span>
            <span className="orange">"</span><span className="white">)</span>
        </li>
        <li>
            <span className="blue">sayHello</span><span className="white">()</span>
        </li>
      </ul>
  </div>
</div>
<div className="laptop-base">
  <div className="laptop-trackpad"></div>
</div>
    </div>
        </div>
            </>
     );
}
 
export default Me;