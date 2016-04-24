//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Mike',
        lastName: 'Galligar'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    $('#login-form .btn').on('click', function(event) {
      $('#login-form').hide();
      $('.user-info').show();
      $('.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
    });

/*  VDB NOTES ON: VIEW DETAILS BUTTONS: 1 - 12:
    1) Get stuff in all the classes called “view-details”.
    2) When something in that class gets clicked; create an object called event.
    3) var targetElement = event.target - the element that triggered the event.

    4) var container = targetElement.parentElement.parentElement //
      Find the “grandparent of, event.target. In this case targetElement is the button
      that got clicked. find the container of the container of THAT button and…….
    5) parentElement - JQ object, returns the parent element of specified element.

    6) In the grandparent of the button that got clicked, find an element that has the class details
    7) .each The function inside each will return a list of the things that were found.
      The list will be an array. It will contain index & value pairs. In this case, there is only 1 thing to find.
      the value of what is found is represented by, el. The whole point is to toggle el between visible & invisible.
    8) is - A JQ method.
    9) ':visible' - A JQ psudeo selector. = select things that are visible.
        = opacity != 0
        = display != hidden
        = height & width != 0
    10) If the targetElement is visible, fadeOut.
    11) After making the text disapear: Change the text of the button to say: "View Details".
    12) If el != visible, fadeIn and set the button to read: "Hide Details".

*/
                                                                    /*VDB NOTES*/
    $('.view-details').on('click', function(event){                 /*1-2*/
        console.log(event);
          var targetElement = event.target;                         /*3*/
          var container = targetElement.parentElement.parentElement;/*4-5*/
          $(container).find('.details').each(function(index, el){   /*6-7*/
              if ($(el).is(':visible')){                            /*8-9*/
                  $(el).fadeOut();                                  /*10*/
                  targetElement.innerText = "View Details"          /*11*/

              } else {                                              /*12*/
                  $(el).fadeIn();
                  targetElement.innerText = "Hide Details"
              }
          });
    });

/*   NOTES ON: Voting Progress: 1 - :
  1) Find all items in class, '.vote'. Listen for a click in this class.
  2) If the thing clicked in class '.vote'; has attribute: 'data-vote' && value of: "great"....
  3) Increment the counters, voteCounts.great & voteCounts.total by 1
    else:
  4) If the thing clicked in class '.vote'; has attribute: 'data-vote' && value of: "greatest"....
  5) Increment the counters, voteCounts.greatest & voteCounts.total by 1
  6) Write these to console just to check progress on code writing: voteCounts.great, voteCounts.greatest, voteCounts.total
  7) Create 2 variables to calculate & hold data. The data will be the percent of votes vs total number of votes.
      % of great votes...
      % of greatest votes....
  8) Find the class: '.great-progress'. Change the CSS attribute width with the Value from: (7a)
  9) Find the class: '.greatest-progress'. Change the CSS attribute width with the Value from: (7b)
*/

    $('.vote').on('click', function(event){                                   /*1*/
        console.log(event);
        if ($(this).attr('data-vote')==="great"){                             /*2*/
            voteCounts.great++;                                               /*3*/
            voteCounts.total++;
        }else{
            if ($(this).attr('data-vote')==="greatest"){                      /*4*/
                voteCounts.greatest++;                                        /*5*/
                voteCounts.total++;
            }
        }
    console.log("gr "+ voteCounts.great);
    console.log("Greatest" + voteCounts.greatest);                            /*6*/
    console.log("total" + voteCounts.total);

    var greatPercent = voteCounts.great / voteCounts.total * 100 + '%';       /*7a*/
    var greatestPercent = voteCounts.greatest / voteCounts.total * 100 + '%'; /*7b*/
    $('.great-progress').css('width', greatPercent);                          /*8*/
    $('.greatest-progress').css('width', greatestPercent);                    /*8*/
    console.log(greatPercent);
    console.log(greatestPercent);
    $('.boxGreat').html("Number of votes for Great are: " + voteCounts.great + "&nbsp;&nbsp;&nbsp;&nbsp;");
    $('.boxGreatest').html("Number of votes for Greatest of all time are: " + voteCounts.greatest + "&nbsp;&nbsp;&nbsp;&nbsp;");
    $('.boxTotal').html("The total number of votes is: " + voteCounts.total + "&nbsp;");
    });
});
