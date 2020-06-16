$(function() {
    $("#faq > dt").click(showHide);
});
function showHide(event) {
    var $subject = $(event.currentTarget);
    $subject.prevAll("dd:visible").slideUp("fast", function() {
        var $bullet = $(this).prev().children().children("span");
        $bullet.removeClass("faq-dt-span1");
        $bullet.addClass("faq-dt-span2");
    });
    $subject.next().nextAll("dd:visible").slideUp("fast", function() {
        var $bullet = $(this).prev().children().children("span");
        $bullet.removeClass("faq-dt-span1");
        $bullet.addClass("faq-dt-span2");
    });
    $subject.next().slideToggle("fast", function() {
        var $bullet = $(this).prev().children().children("span");
        if ($(this).is(":visible")) {
            $bullet.addClass("faq-dt-span1");
            $bullet.removeClass("faq-dt-span2");
        } else {
            $bullet.addClass("faq-dt-span2");
            $bullet.removeClass("faq-dt-span1");
        }
    });
}