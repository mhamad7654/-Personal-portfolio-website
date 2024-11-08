$(document).ready(function() {
    $('body').fadeIn(1000);

    $('a.nav-link').click(1000,function(e) {
        if (this.href === window.location.href) {
            return;
        }

        e.preventDefault();
        var newUrl = this.href;

        $('body').fadeOut(1000, function() {
            window.location = newUrl;
        });
    });
});

// ... (rest of your existing code)

$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function cycleItems() {
        const item = $('.carousel-item').eq(currentIndex);
        items.hide();
        item.css('display', 'block');
    }

    function nextSlide() {
        currentIndex += 1;
        if (currentIndex > itemCount - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }

    function prevSlide() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemCount - 1;
        }
        cycleItems();
    }

    $('#next').click(nextSlide);
    $('#prev').click(prevSlide);

    setInterval(nextSlide, 3000);
});

$(document).ready(function(){
    $("#toggleInfo").click(function(){
        $("#moreInfo").toggle();
    });
});


$(document).ready(function(){
    $("#contactForm").submit(function(event){
        var isValid = true;
        if ($("#name").val().trim() === "") {
            isValid = false;
            alert("Name is required.");
        }
        if ($("#email").val().trim() === "") {
            isValid = false;
            alert("Email is required.");
        }
        if ($("#message").val().trim() === "") {
            isValid = false;
            alert("Message is required.");
        }
        if (!isValid) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed');
    const typedItems = typedElement.getAttribute('data-typed-items').split(', ');

    var options = {
        strings: typedItems,
        typeSpeed: 70,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed('.typed', options);
});