/**
 * better-popover: Popover plugin for better-dom
 * @version 0.5.0 Sat, 04 Oct 2014 14:46:14 GMT
 * @link https://github.com/chemerisuk/better-popover
 * @copyright 2014 Maksim Chemerisuk
 * @license MIT
 */
(function(DOM) {
    DOM.extend("*", {
        popover: function(content, hpos, vpos) {
            var popover = this.get("_popover");

            if (!popover) {
                popover = DOM.create("div.better-popover").css("visibility", "hidden");

                this.before(popover);

                popover.css({
                    // MUST set position:absolute for correct offset calculation
                    "position": "absolute",
                    "z-index": 1 + (this.css("z-index") | 0)
                });

                this.set("_popover", popover);
            }

            if (typeof content === "string") {
                popover.set(content).show();
            }

            if (typeof hpos === "string") {
                // position is "center" by default
                hpos = hpos || "center";
                vpos = vpos || "center";

                var offset = this.offset();
                var popoverOffset = popover.css("margin", "0").offset();

                popover.css({
                    "margin-left": calcLeftMargin(hpos, offset, popoverOffset),
                    "margin-top": calcTopMargin(vpos, offset, popoverOffset)
                });
            }

            return popover;
        }
    });

    function calcLeftMargin(pos, offset, popoverOffset) {
        switch(pos) {
        case "left":
            return offset.left - popoverOffset.left;

        case "center":
            return offset.left - popoverOffset.left + (offset.width - popoverOffset.width) / 2;

        case "right":
            return offset.right - popoverOffset.left - popoverOffset.width;
        }
    }

    function calcTopMargin(pos, offset, popoverOffset) {
        switch(pos) {
        case "top":
            return offset.top - popoverOffset.bottom;

        case "center":
            return offset.top - popoverOffset.top + (offset.height - popoverOffset.height) / 2;

        case "bottom":
            return offset.bottom - popoverOffset.top;
        }
    }
}(window.DOM));
