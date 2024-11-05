const Form = document.getElementById("dynamic-resume")as HTMLFormElement;
const cvShowcaseElement = document.getElementById("Curriculum-Vitae")as HTMLDivElement;

Form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const education = (document.getElementById("education")as HTMLInputElement).value
    const contact = (document.getElementById("contact")as HTMLInputElement).value
    const location = (document.getElementById("location")as HTMLInputElement).value
    const skill_one = (document.getElementById("skill_one")as HTMLInputElement).value
    const skill_two = (document.getElementById("skill_two")as HTMLInputElement).value
    const skill_three = (document.getElementById("skill_three")as HTMLInputElement).value
    const skill_four = (document.getElementById("skill_four")as HTMLInputElement).value
    const skill_five = (document.getElementById("skill_five")as HTMLInputElement).value
    const experience = (document.getElementById("experience")as HTMLInputElement).value




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

    if(cvShowcaseElement){
        cvShowcaseElement.innerHTML = profileHTML
    }



})