const subscribe = document.getElementById("subscribe");
const after_subscribe = document.getElementById("after_subscribe");
const input = document.getElementById("input");
const no_input = document.getElementById("no_input");

after_subscribe.style.display = "none";
no_input.style.display = "none";

subscribe.addEventListener("click",function(){
  if(input.value.trim() === "" ){
no_input.style.display = "block"
  } else {
    subscribe.style.display = "none";
    after_subscribe.style.display = "block";
    no_input.style.display = "none"
  }
  
});

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

const setSrc = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.src = value;
};

const posts = data.posts;

setText("post_title", posts[0].title);
setText("post_date", posts[0].creationDate);
setText("post_description", posts[0].description);
setSrc("thumbnail", posts[0].thumbnail);
setText("tags1", posts[0].tags[0]);
setText("tags2", posts[0].tags[1]);

setText("post_title2", posts[1].title);
setText("post_date2", posts[1].creationDate);
setText("post_description2", posts[1].description);
setSrc("thumbnail2", posts[1].thumbnail);
setText("tags3", posts[1].tags[0]);
setText("tags4", posts[1].tags[1]);
setText("tags5", posts[1].tags[2]);

setText("post_title3", posts[2].title);
setText("post_date3", posts[2].creationDate);
setText("post_description3", posts[2].description);
setSrc("thumbnail3", posts[2].thumbnail);
setText("tags6", posts[2].tags[0]);
setText("tags7", posts[2].tags[1]);
setText("tags8", posts[2].tags[2]);

setText("post_title4", posts[3].title);
setText("post_date4", posts[3].creationDate);
setText("post_description4", posts[3].description);
setSrc("thumbnail4", posts[3].thumbnail);
setText("tags9", posts[3].tags[0]);
setText("tags10", posts[3].tags[1]);
setText("tags11", posts[3].tags[2]);

setText("post_title5", posts[4].title);
setText("post_date5", posts[4].creationDate);
setText("post_description5", posts[4].description);
setSrc("thumbnail5", posts[4].thumbnail);
setText("tags12", posts[4].tags[0]);
setText("tags13", posts[4].tags[1]);
setText("tags14", posts[4].tags[2]);

setText("post_title6", posts[5].title);
setText("post_date6", posts[5].creationDate);
setText("post_description6", posts[5].description);
setSrc("thumbnail6", posts[5].thumbnail);
setText("tags15", posts[5].tags[0]);
setText("tags16", posts[5].tags[1]);
setText("tags17", posts[5].tags[2]);

setText("post_title7", posts[6].title);
setText("post_date7", posts[6].creationDate);
setText("post_description7", posts[6].description);
setSrc("thumbnail7", posts[6].thumbnail);
setText("tags18", posts[6].tags[0]);
setText("tags19", posts[6].tags[1]);
setText("tags20", posts[6].tags[2]);

setText("post_title8", posts[7].title);
setText("post_date8", posts[7].creationDate);
setText("post_description8", posts[7].description);
setSrc("thumbnail8", posts[7].thumbnail);
setText("tags21", posts[7].tags[0]);
setText("tags22", posts[7].tags[1]);
setText("tags23", posts[7].tags[2]);

setText("post_title9", posts[8].title);
setText("post_date9", posts[8].creationDate);
setText("post_description9", posts[8].description);
setSrc("thumbnail9", posts[8].thumbnail);
setText("tags24", posts[8].tags[0]);
setText("tags25", posts[8].tags[1]);
setText("tags26", posts[8].tags[2]);

const archives = data.archives;

setText("archives_container", archives[0].label);
setText("archives_container2", archives[0].count);

setText("archives_container3", archives[1].label);
setText("archives_container4", archives[1].count);
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const prev_page = document.getElementById("prev_page");
const next_page = document.getElementById("next_page");
const bouton1 = document.getElementById("1");
const bouton2 = document.getElementById("2");

div2.style.display='none';
bouton1.style.backgroundColor='#b91c1c';
bouton1.style.color='white';
prev_page.disabled=true;

bouton2.addEventListener("click",function(){
  div1.style.display="none";
  div2.style.display="block";
  div2.style.gap="40px";
  div2.style.display="flex";
  bouton2.style.backgroundColor="#b91c1c";
  bouton2.style.color="white";
  prev_page.disabled=false;
  next_page.disabled=true;
  bouton1.style.backgroundColor="white";
  bouton1.style.color="black";
});
next_page.addEventListener("click",function(){
  div1.style.display="none";
  div2.style.display="block";
  div2.style.gap="40px";
  div2.style.display="flex";
  bouton2.style.backgroundColor="#b91c1c";
  bouton2.style.color="white";
  prev_page.disabled=false;
  next_page.disabled=true;
  bouton1.style.backgroundColor="white";
  bouton1.style.color="black";
});
bouton1.addEventListener("click",function(){
  div1.style.display="block";
  div1.style.gap="40px";
  div1.style.display="flex";
  div2.style.display="none";
  bouton2.style.backgroundColor="white";
  bouton2.style.color="black";
  prev_page.disabled=true;
  next_page.disabled=false;
  bouton1.style.backgroundColor="#b91c1c";
  bouton1.style.color="white";
});
prev_page.addEventListener("click",function(){
  div1.style.display="block";
  div1.style.gap="40px";
  div1.style.display="flex";
  div2.style.display="none";
  bouton2.style.backgroundColor="white";
  bouton2.style.color="black";
  prev_page.disabled=true;
  next_page.disabled=false;
  bouton1.style.backgroundColor="#b91c1c";
  bouton1.style.color="white";
});

const youtube_container = document.getElementById("youtube_container");
data.youtubeVideos.forEach(video => {
  const videoHTML = `
    <div>
      <iframe 
        class="w-full h-40 rounded-lg"
        src="https://www.youtube.com/embed/${video.id}"
        title="${video.title}"
        frameborder="0"
        allowfullscreen>
      </iframe>
      <p class="text-sm mt-2 font-['Poppins'] text-[#57534e]">${video.title}</p>
    </div>
  `;
  youtube_container.innerHTML += videoHTML;
});