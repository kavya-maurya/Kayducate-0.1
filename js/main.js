 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    dots: false,
		    nav: false,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 3
	        }
		    }
			});

			$('.customNextBtn').click(function() {
			  $('.nonloop-block-14').trigger('next.owl.carousel');
			})
			$('.customPrevBtn').click(function() {
			  $('.nonloop-block-14').trigger('prev.owl.carousel');
			})
		}



		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    smartSpeed: 900,
	    autoplayTimeout: 7000,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
	  });

		$('.slide-one-item').on('translated.owl.carousel', function(event) {
			console.log('translated');
			$('.owl-item.active').find('.js-slide-text').addClass('active');
		});
		$('.slide-one-item').on('translate.owl.carousel', function(event) {
			console.log('translate');
			$('.owl-item.active').find('.js-slide-text').removeClass('active');
		});
		
		$('.owl-item.active').find('.js-slide-text').addClass('active');

	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();

});


function generatePlan(){

    const hours =
        parseInt(document.getElementById("hours").value);

    const selectedSubjects =
        [...document.querySelectorAll(
            '.subjects input:checked'
        )].map(cb => cb.value);

    const result =
        document.getElementById("result");

    if(selectedSubjects.length === 0){
        result.style.display = "block";
        result.innerHTML =
        "<p>Please select at least one subject.</p>";
        return;
    }

    let plan = `
        <h3>Your Weekly Study Plan</h3>
        <ul>
    `;

    selectedSubjects.forEach(subject => {

        const mins =
            Math.floor((hours * 60) /
            selectedSubjects.length);

        plan += `
            <li>
                <strong>${subject}</strong> :
                ${mins} mins/day
            </li>
        `;
    });

    plan += `
        </ul>

        <p>
        Recommended:
        Revise for 15 mins before sleep and
        attempt one weekly self-test.
        </p>
    `;

    result.innerHTML = plan;
    result.style.display = "block";
}



const questions = [

{
question:"How do you prefer learning a new topic?",
options:[
{text:"Watch a video explanation",type:"visual"},
{text:"Read notes or textbook",type:"reading"},
{text:"Solve problems immediately",type:"practice"},
{text:"Discuss with someone",type:"collab"}
]
},

{
question:"Before exams, what helps most?",
options:[
{text:"Mind maps and diagrams",type:"visual"},
{text:"Revision notes",type:"reading"},
{text:"Practice papers",type:"practice"},
{text:"Group discussion",type:"collab"}
]
},

{
question:"You remember information best when...",
options:[
{text:"You see it",type:"visual"},
{text:"You read it",type:"reading"},
{text:"You apply it",type:"practice"},
{text:"You explain it",type:"collab"}
]
},

{
question:"What do you enjoy most?",
options:[
{text:"Watching tutorials",type:"visual"},
{text:"Reading articles",type:"reading"},
{text:"Building projects",type:"practice"},
{text:"Collaborating with others",type:"collab"}
]
},

{
question:"When stuck on a difficult concept?",
options:[
{text:"Look for visual examples",type:"visual"},
{text:"Read another explanation",type:"reading"},
{text:"Keep practicing",type:"practice"},
{text:"Ask someone for help",type:"collab"}
]
},

{
question:"Which learning environment suits you?",
options:[
{text:"Interactive visual lessons",type:"visual"},
{text:"Quiet reading sessions",type:"reading"},
{text:"Hands-on activities",type:"practice"},
{text:"Mentor-led discussions",type:"collab"}
]
}

];

let current=0;

let scores={
visual:0,
reading:0,
practice:0,
collab:0
};

const question=document.getElementById("question");
const options=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressFill");

loadQuestion();

function loadQuestion(){

counter.innerText=`Question ${current+1} of ${questions.length}`;

question.innerText=questions[current].question;

progress.style.width=
((current/questions.length)*100)+"%";

options.innerHTML="";

questions[current].options.forEach(opt=>{

let btn=document.createElement("button");

btn.className="option";

btn.innerText=opt.text;

btn.onclick=()=>selectAnswer(opt.type);

options.appendChild(btn);

});

}

function selectAnswer(type){

scores[type]++;

current++;

if(current<questions.length){
loadQuestion();
}
else{
showResult();
}

}

function showResult(){

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

let max=Math.max(...Object.values(scores));

let profile="";

let description="";

let rec=[];

if(scores.visual===max){

profile="Visual Strategist";

description="You learn best through diagrams, videos, visual examples and structured explanations.";

rec=[
"Mind Maps",
"Concept Videos",
"Infographics"
];

}

else if(scores.practice===max){

profile="Practice Warrior";

description="You learn best by solving, experimenting and applying concepts.";

rec=[
"Mock Tests",
"Projects",
"Practice Worksheets"
];

}

else if(scores.reading===max){

profile="Knowledge Builder";

description="You absorb information effectively through reading and revision.";

rec=[
"Detailed Notes",
"Reading Material",
"Revision Sheets"
];

}

else{

profile="Collaborative Learner";

description="You learn best through discussion, mentorship and interaction.";

rec=[
"Group Study",
"Mentorship Sessions",
"Peer Discussions"
];

}

document.getElementById("profile").innerText=profile;
document.getElementById("description").innerText=description;

const total=questions.length;

const visual=Math.round((scores.visual/total)*100);
const practice=Math.round((scores.practice/total)*100);
const reading=Math.round((scores.reading/total)*100);
const collab=Math.round((scores.collab/total)*100);

document.getElementById("vScore").innerText=visual+"%";
document.getElementById("pScore").innerText=practice+"%";
document.getElementById("rScore").innerText=reading+"%";
document.getElementById("cScore").innerText=collab+"%";

setTimeout(()=>{

document.getElementById("visualBar").style.width=visual+"%";
document.getElementById("practiceBar").style.width=practice+"%";
document.getElementById("readingBar").style.width=reading+"%";
document.getElementById("collabBar").style.width=collab+"%";

},200);

document.getElementById("recommendations").innerHTML=
rec.map(r=>`<li>${r}</li>`).join("");

}

