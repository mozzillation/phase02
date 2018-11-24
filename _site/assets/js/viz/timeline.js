$(document).ready(function () {
    if ($('#timeline').length) {

        $.get("./assets/js/viz/data/timeline.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#timeline-viz').append(svg);
            callback();
        });


        function callback() {


            $('#timeline-viz svg > g[data-id="category"]').hover(function () {
                $this = $(this);
                if ($this.hasClass('is-disabled')) {
                    $this.removeClass('is-disabled').attr('data-disabled', 1);
                }

                $('#timeline-viz svg g[data-id="category"]').not($this).addClass('is-hidden');
            }, function () {
                $('#timeline-viz svg g[data-id="category"]').removeClass('is-hidden ');

                $disabled = $('#timeline-viz svg g[data-disabled="1"]');
                $disabled.addClass('is-disabled').removeAttr('data-disabled');

            })


            $('#timeline-viz svg > g[data-id="category"]').click(function () {


                if ($(this).hasClass('is-active')) {

                    $('#timeline-viz svg g[data-id="category"]').removeClass('is-hidden is-disabled is-active')
                    $('.events').slideUp();

                } else {



                    $this = $(this);
                    var ID = '#' + $this.attr('id') + '.events';
                    console.log(ID);

                    $('#timeline-viz svg g[data-id="category"]').addClass('is-disabled').removeAttr('data-disabled');
                    $this.removeClass('is-hidden is-disabled is-active').addClass('is-active');

                    $('.events').slideUp();
                    $(ID).slideDown();



                }

            })


        };



        // ————————————————————

        $.get("./assets/js/viz/data/timeline2.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#timeline-viz2').append(svg);
            callback2();
        });


        function callback2() {

            $('#timeline-viz2 svg > g[data-id="campaign"]').hover(function () {
                $this = $(this);
                $('#timeline-viz2 svg g[data-id="campaign"]').not($this).addClass('is-hidden');
            }, function () {
                $('#timeline-viz2 svg > g').removeClass('is-hidden');


            })


        }







    }
});
