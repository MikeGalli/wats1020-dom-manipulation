//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)

    //find a button inside ID login-form.
    //find a button inside ID login-form.
    $('#login-form .btn').on('click', function(event) {
      $('#login-form').hide();
      $('.user-info').show();
    });

    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

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
    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
