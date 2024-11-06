"use strict";
const Form = document.getElementById("editable-resume");
const cvShowcaseElement = document.getElementById("Curriculum-Vitae");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const contact = document.getElementById("contact").value;
    const location = document.getElementById("location").value;
    const skill_one = document.getElementById("skill_one").value;
    const skill_two = document.getElementById("skill_two").value;
    const skill_three = document.getElementById("skill_three").value;
    const skill_four = document.getElementById("skill_four").value;
    const skill_five = document.getElementById("skill_five").value;
    const experience = document.getElementById("experience").value;
    const profileHTML = `
    <img src="image/p-img.jpg" alt="profile-img" class="profile-img">
    <h2><b>𝕰𝖑𝖎𝖙𝖊 𝕽𝖊𝖘𝖚𝖒𝖊</b></h2>
    <br/>
    <h3>𝕻𝖊𝖗𝖘𝖔𝖓𝖆𝖑 𝕴𝖓𝖋𝖔𝖗𝖒𝖆𝖙𝖎𝖔𝖓</h3>
    <p>𝕹𝖆𝖒𝖊: ${name}</p>
    <p>𝕰𝖒𝖆𝖎𝖑: ${email}</p>
    <p>𝕮𝖔𝖓𝖙𝖆𝖈𝖙: ${contact}</p>
    <p>𝕷𝖔𝖈𝖆𝖙𝖎𝖔𝖓 ${location}</p>
     

    <br/>
    <h3>𝖄𝖔𝖚𝖗 𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</h3>
    <p>𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓: ${education}</p>



    <br/>
    <h3>𝖂𝖔𝖗𝖐 𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊</h3>
    <p>𝕰𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖊: ${experience}</p>


    <br/>
    <h3>𝕾𝖐𝖎𝖑𝖑𝖘</h3>
    <p>. ${skill_one}</p>
    <p>. ${skill_two}</p>
    <p>. ${skill_three}</p>
    <p>. ${skill_four}</p>
    <p>. ${skill_five}</p>




    `;
    if (cvShowcaseElement) {
        cvShowcaseElement.innerHTML = profileHTML;
    }
});
