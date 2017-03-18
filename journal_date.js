/*
- Inserts ISO 8601 formatted date, plus week day and time as a heading at the beginning of your document. Also inserts an underline and carriage return to start typing notes.
- Based on (1) The Log action for 1Writer, (2) Michal's shared work (thank you Michal!). This version edited to add ISO date format / 24hr time / and en-UK days.
- ISO 8601 was prepared by, and is under the direct responsibility of, ISO Technical Committee TC 154. This standard defines the all-numeric date notation in most-to-least-significant order [YYYY]-[MM]-[DD]
- Hyphens used instead of #'s for the header so that the file name is easily filtered by date.
*/

// Function to pad leading zeros to the hour & minute
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Pad zero's to formatted 24hr time
var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
time = h+":"+m;

// Format year, month, day, and weekday
var dd = d.getDate();
var mm = addZero(d.getMonth()+1);
var yyyy = d.getYear()+1900;
var dayOfWeek = d.getDay();
var daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var day = daysOfWeek[dayOfWeek];
var today = yyyy+'-'+mm+'-'+dd+'  '+day+'@'+time;

// Insert date & time at beginning of document in Markdown header, position cursor
var heading = today+'\n'+'---'+'\n'+'---'+'\n\n';
editor.replaceTextInRange(0, 0, heading);
editor.setSelectedRange(heading.length-2, heading.length-2);
