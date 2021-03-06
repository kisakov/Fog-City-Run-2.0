/* global document */
/*eslint-disable no-unused-vars, no-undef */

function addLikelyRacersListener() {
    "use strict";
    var likelyTable = document.getElementById("likely-table");
    if (likelyTable) {
        likelyTable.addEventListener("click", function(event) {
            var row = likelyTable.rows[event.target.parentNode.rowIndex];
            var id = row.cells[0].textContent;
            var name = row.cells[1].textContent;
            var bib = row.cells[2].textContent;
            var racerField = document.getElementById("start_item_racer_id");
            var racerIdHiddenDiv = document.getElementById("racer_id_hidden");
            racerField.value = name;
            racerIdHiddenDiv.value = id;
            var bibField = document.getElementById("start_item_bib");
            bibField.value = bib;
        });
    }
}

function runAutocompleteDance() {
  "use strict";
  var racerIdHiddenDiv = document.getElementById("racer_id_hidden");
  var racerIdDiv = racerIdHiddenDiv.parentNode.childNodes[0].nextSibling;
  if (racerIdHiddenDiv && racerIdDiv) {
    $("#" + racerIdDiv.id).bind("railsAutocomplete.select", function(event, data) {
      racerIdDiv.value = data.item.label;
      racerIdHiddenDiv.value = data.item.value;
    });
  }
}
