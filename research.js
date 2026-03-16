 function setText(id,value){
const el=document.getElementById(id)
if(el) el.textContent=value
}


setText("research_label","ACADEMIC WORK")

document.getElementById("research_title").innerHTML=
"Research <span class='text-[#991b1b] italic'>papers</span>"

setText(
"research_description",
"My academic work focuses on multi-agent systems and normative frameworks, exploring how autonomous agents coordinate through norms and social structures in complex, distributed environments."
)



data.papers.forEach((paper,index)=>{

const i=index+1

setText(`paper${i}_title`,paper.title)

setText(`paper${i}_abstract`,paper.abstract)

setText(
`paper${i}_meta`,
paper.authors.join(", ")+" — "+paper.journal
)

setText(
`paper${i}_date`,
paper.publishedDate.toLocaleDateString("en-US",{year:"numeric",month:"long"})
)

setText(`paper${i}_read`,"READ PDF")

document.getElementById(`paper${i}_link`).href=paper.pdfUrl


const tagsContainer=document.getElementById(`paper${i}_tags`)

paper.tags.forEach(tag=>{

const span=document.createElement("span")

span.className="px-3 py-1 text-xs rounded-full  bg-[#f9f6f1] text-neutral-700 uppercase tracking-wide"

span.textContent=tag

tagsContainer.appendChild(span)

})

})