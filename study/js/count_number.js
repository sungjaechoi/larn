const number = $(".class").text().replace(/,/g, "");
const number2 = $(".class").text().replace(/,/g, "");
var memberCountConTxt1 = number;
var memberCountConTxt2 = number2;
var numberAnimated = false;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$(window).on("scroll", function (e) {
    if (numberAnimated == false) {
        $({
            val: 0,
        }).animate(
            {
                val: memberCountConTxt1,
            },
            {
                duration: 2000,
                step: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".count_number").text(num);
                },
                complete: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".count_number").text(num);
                },
            }
        );

        $({
            val: 0,
        }).animate(
            {
                val: memberCountConTxt2,
            },
            {
                duration: 2000,
                step: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".count_number2").text(num);
                },
                complete: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".count_number2").text(num);
                },
            }
        );
        numberAnimated = true;
    }
});
