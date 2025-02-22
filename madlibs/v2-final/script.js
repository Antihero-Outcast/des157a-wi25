(function()
{
    'use strict';

    console.log('reading js');

    // item interactions
    const wand = document.querySelector('#wand');
    const title = document.querySelector('#spellbook-title h2');
    const author = document.querySelector('#spellbook-title h3');

    // madlib form
    const page1 = document.querySelector('#pg1');
    const page2 = document.querySelector('#pg2');
    const page3 = document.querySelector('#pg3');
    const formData = {};

    // page navs
    const pg1Next = document.querySelector('#page-nav1 .next');
    const pg2Prev = document.querySelector('#page-nav2 .prev');
    const pg2Next = document.querySelector('#page-nav2 .next');
    const pg3Prev = document.querySelector('#page-nav3 .prev');
    const finishBtn = document.querySelector('#page-nav3 #finishBtn')

    // page navs visuals
    const pg1num = document.querySelector('#page-nav1 h4');
    const pg1Rarrow = document.querySelector('#page-nav1 #rarrow1');
    const pg2Larrow = document.querySelector('#page-nav2 #larrow2');
    const pg2num = document.querySelector('#page-nav2 h4');
    const pg2Rarrow = document.querySelector('#page-nav2 #rarrow2');
    const pg3Larrow = document.querySelector('#page-nav3 #larrow3');
    const pg3num = document.querySelector('#page-nav3 h4');

    // overlay
    const spellbook = document.querySelector('#overlay');
    const exitBtn = document.querySelector('#overlay .close');
    const lookInBtn = document.querySelector('#look-inside');

    wand.addEventListener('mouseover', function()
    {
        wand.setAttribute('src', 'images/wand-lit.png');
        wand.width = "167";
        wand.height = "621";
        wand.style.top = "20px";
        wand.style.right = "40px";
        wand.style.transition = "all 0.25s";
    });

    wand.addEventListener('mouseout', function()
    {
        wand.setAttribute('src', 'images/wand-unlit.png');
        wand.width = "144";
        wand.height = "604";
        wand.style.transition = "all ease-in-out 0.25s";
    });

    pg1Next.addEventListener('click', function()
    {
        const entry1 = document.querySelector('#one').value;
        const entry2 = document.querySelector('#two').value;
        const entry3 = document.querySelector('#three').value;
        const entry4 = document.querySelector('#four').value;
        const entry5 = document.querySelector('#five').value;
        
        if(entry1 && entry2 && entry3 && entry4 && entry5)
        {
            page1.className = "hidden";
            pg1num.className = "hidden";
            pg1Rarrow.className = "hidden";

            page2.className = "visible";   
            pg2Larrow.className = "visible";  
            pg2num.className = "visible";  
            pg2Rarrow.className = "visible";  
        }
        else
        {
            alert("Please fill out all fields.");
        }
    });

    pg2Prev.addEventListener('click', function()
    {
        page2.className = "hidden";   
        pg2Larrow.className = "hidden";  
        pg2num.className = "hidden";  
        pg2Rarrow.className = "hidden";  

        page1.className = "visible";
        pg1num.className = "visible";
        pg1Rarrow.className = "visible";
    });

    pg2Next.addEventListener('click', function()
    {
        const entry6 = document.querySelector('#six').value;
        const entry7 = document.querySelector('#seven').value;
        const entry8 = document.querySelector('#eight').value;
        const entry9 = document.querySelector('#nine').value;
        const entry10 = document.querySelector('#ten').value;

        if(entry6 && entry7 && entry8 && entry9 && entry10)
        {
            page2.className = "hidden";
            pg2Larrow.className = "hidden";
            pg2num.className = "hidden";
            pg2Rarrow.className = "hidden";

            page3.className = "visible";   
            pg3Larrow.className = "visible";  
            pg3num.className = "visible";  
            finishBtn.className = "visible";
        }
        else
        {
            alert("Please fill out all fields.");
        }
    });

    pg3Prev.addEventListener('click', function()
    {
        page3.className = "hidden";   
        pg3Larrow.className = "hidden";  
        pg3num.className = "hidden";  
        finishBtn.className = "hidden";

        page2.className = "visible";
        pg2Larrow.className = "visible"
        pg2num.className = "visible";
        pg2Rarrow.className = "visible";
    });

    finishBtn.addEventListener('click', function(event)
    {
        event.preventDefault();
        
        const entry1 = document.querySelector('#one').value;
        const entry2 = document.querySelector('#two').value;
        const entry3 = document.querySelector('#three').value;
        const entry4 = document.querySelector('#four').value;
        const entry5 = document.querySelector('#five').value;

        const entry6 = document.querySelector('#six').value;
        const entry7 = document.querySelector('#seven').value;
        const entry8 = document.querySelector('#eight').value;
        const entry9 = document.querySelector('#nine').value;
        const entry10 = document.querySelector('#ten').value;

        const entry11 = document.querySelector('#eleven').value;
        const entry12 = document.querySelector('#twelve').value;
        const entry13 = document.querySelector('#thirteen').value;
        const entry14 = document.querySelector('#fourteen').value;
        const entry15 = document.querySelector('#fifteen').value;

        if(entry11 && entry12 && entry13 && entry14 && entry15)
        {
            document.querySelector('.n1').innerHTML = `${entry1}`;
            document.querySelector('#preface .n1').innerHTML = `${entry1}`;
            document.querySelector('.n2').innerHTML = `${entry2}`;
            document.querySelector('.n3').innerHTML = `${entry3}`;
            document.querySelector('.n4').innerHTML = `${entry4}`;
            document.querySelector('#preface .n4').innerHTML = `${entry4}`;
            document.querySelector('.n5').innerHTML = `${entry5}`;

            document.querySelector('.n6').innerHTML = `${entry6}`;
            document.querySelector('.n7').innerHTML = `${entry7}`;
            document.querySelector('.n8').innerHTML = `${entry8}`;
            document.querySelector('.n9').innerHTML = `${entry9}`;
            document.querySelector('.n10').innerHTML = `${entry10}`;

            document.querySelector('.n11').innerHTML = `${entry11}`;
            document.querySelector('.n12').innerHTML = `${entry12}`;
            document.querySelector('.n13').innerHTML = `${entry13}`;
            document.querySelector('.n14').innerHTML = `${entry14}`;
            document.querySelector('.n15').innerHTML = `${entry15}`;

            document.querySelector('.n1').style.color = "#42E900";
            document.querySelector('#preface .n1').style.color = "#9D0DBA";
            document.querySelector('.n2').style.color = "#42E900";
            document.querySelector('.n3').style.color= "#42E900";
            document.querySelector('.n4').style.color = "#42E900";
            document.querySelector('.signature .n4').style.color = "#9D0DBA";
            document.querySelector('.n5').style.color= "#9D0DBA"

            document.querySelector('.n6').style.color = "#9D0DBA";
            document.querySelector('.n7').style.color = "#9D0DBA";
            document.querySelector('.n8').style.color= "#9D0DBA";
            document.querySelector('.n9').style.color = "#9D0DBA";
            document.querySelector('.n10').style.color= "#9D0DBA"

            document.querySelector('.n11').style.color = "#9D0DBA";
            document.querySelector('.n12').style.color = "#9D0DBA";
            document.querySelector('.n13').style.color= "#9D0DBA";
            document.querySelector('.n14').style.color = "#9D0DBA";
            document.querySelector('.n15').style.color= "#9D0DBA"

            lookInBtn.className = "visible";
        }
        else
        {
            alert("Please fill out all fields.");
        }
    });

    lookInBtn.addEventListener('click', function()
    {
        spellbook.className = "visible";
        lookInBtn.className = "hidden";
    });

    exitBtn.addEventListener('click', function()
    {
        spellbook.className = "hidden";
        document.querySelectorAll('input').forEach((function(formData)
        {
            formData.value = "";
        }))

        page3.className = "hidden";   
        pg3Larrow.className = "hidden";  
        pg3num.className = "hidden";  
        finishBtn.className = "hidden";

        document.querySelector('.n1').innerHTML = "~~~~~~~";
        document.querySelector('.n2').innerHTML = "~~~~~~~";
        document.querySelector('.n3').innerHTML = "~~~~~~~~~";
        document.querySelector('.n4').innerHTML = "~~~~~~~";

        document.querySelector('.n1').style.color = "#BF882C";
        document.querySelector('.n2').style.color = "#BF882C";
        document.querySelector('.n3').style.color= "#BF882C";
        document.querySelector('.n4').style.color = "#BF882C";

        page1.className = "visible";
        pg1num.className = "visible";
        pg1Rarrow.className = "visible";
    });
})();