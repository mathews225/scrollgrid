
    // Copyright: 2015 AlignAlytics
    // License: "https://github.com/PMSI-AlignAlytics/scrollgrid/blob/master/MIT-LICENSE.txt"
    // Source: /src/internal/sizes/getExistingTextBound.js
    Scrollgrid.prototype.internal.sizes.getExistingTextBound = function (surface, column, row) {

        var int = this.internal,
            render = int.render,
            returnBounds = { width: 0, height: 0 };

        // Measuring header values is easier because they are all rendered
        surface.selectAll("text")
            .filter(function (d) {
                return (column === undefined || d.columnIndex === column) && (row === undefined || d.rowIndex === row);
            })
            .each(function (d) {
                var b = d3.select(this).node().getBBox();
                if (b.width + 2 * d.cellPadding > returnBounds.width) {
                    returnBounds.width = b.width + 2 * d.cellPadding + (d.sortIcon && d.sortIcon !== 'none' ? render.sortIconSize + d.cellPadding : 0);
                }
                if (b.height > returnBounds.height) {
                    returnBounds.height = b.height;
                }
            });

        return returnBounds;

    };