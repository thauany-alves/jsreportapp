function style_text(style, text, align) {
    styleTag = "";
    if (style.toLowerCase() == "b") {
        styleTag = " class = 'RobotoBold colorBlack font10'>";
    } else {
        styleTag = " class = 'RobotoLight colorBlack font10'>"; 
    }
    alignment = "";
    if (align != "") {
        alignment = " align='" + align + "' ";
    }
    returnVal = "<td"
    return returnVal.concat(alignment, styleTag, text, "</td>");
}