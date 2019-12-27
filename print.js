var printPage = function (title) {
    var opt = {
        dpi: window.devicePixelRatio * 2,
        scale: 2,
    };
    let element = document.getElementById('printArea');
    html2canvas(element, {
        dpi: window.devicePixelRatio * 2,
        scale: 2,
    }).then(canvas => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth / 592.28 * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //页面偏移
        var position = 0;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 555.28;
        var imgHeight = 555.28 / contentWidth * contentHeight;

        var pageData = canvas.toDataURL('image/png', 1);
        var pdf = new jsPDF('', 'pt', 'a4');

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'png', 0, 0, imgWidth, imgHeight);
        } else {
            while (leftHeight > 0) {
                pdf.addImage(pageData, 'png', 20, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if (leftHeight > 106) {
                    pdf.addPage();
                }
            }
        }

        pdf.save(`${title}.pdf`);
    })
}