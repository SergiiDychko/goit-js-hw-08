!function(){var e=document.querySelector(".feedback-form"),t={},a="feedback-form-state";!function(){if(null!==localStorage.getItem(a)){var o=JSON.parse(localStorage.getItem(a));Object.keys(o).forEach((function(a){e.elements[a].value=o[a]||"",t[a]=o[a]||""}))}}(),e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(t))})),document.querySelector('[type="submit"]').addEventListener("click",(function(t){t.preventDefault();var o=JSON.parse(localStorage.getItem(a));console.log(o),Object.keys(o).forEach((function(t){e.elements[t].value=""})),localStorage.removeItem(a)}))}();
//# sourceMappingURL=03-feedback.51771da7.js.map
