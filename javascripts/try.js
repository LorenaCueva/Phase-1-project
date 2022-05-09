/* Global Variables */
const  color = "teal lighten-2";


/* Node Getters */
const mainDiv = () => document.getElementById('main');
const mapDiv = () => document.getElementById('map');
const mapLink = () => document.getElementById('map-link');
const delBtn = (id) => document.getElementById(id);
const breweryCard = (id) => document.getElementById(`b${id}`);
const editBtn = (id) => document.getElementById(`edit-${id}`);

/* Event Listeners */

const mapLinkClickEvent = () => {
    mapLink().addEventListener('click', e => {
         resetMain();
         mapVisible(true)});
}

//check use modal
const deleteBtnEvent = (btn) => {
    btn.addEventListener('click', e => {
        deleteFavorite(btn.id)
        .then(breweryCard(btn.id).remove())
    })
}

/* ???? */

function clickMap(id){
}

const initializeComponents = () => {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
    var elem = document.querySelectorAll('.modal');
    M.Modal.init(elem);
}

const createCollapsibleCard = (title, id, icon) => {
    const ul = document.createElement('ul');
    ul.class = "collapsible popout";
    ul.id = id;
    const li = document.createElement('li');
    const div1 = document.createElement('div');
    div1.className = `collapsible-header card-panel ${color}`;
    const i = document.createElement('i');
    i.className = "material-icons large";
    i.innerText = icon;
    const h5 = document.createElement('h5');
    h5.innerText = title;
    const div2 = document.createElement('div');
    div2.class = "collapsible-body";
    const ul2 = document.createElement('ul');
    ul2.className = "collection left-align"

    div2.append(ul2);
    div1.append(div2);
    li.append(div1);
    ul.append(li);
    
    return ul;
}

const collapsibleItem = (content, father) => {
    const coll = document.createElement('li');
    coll.className = "collection-item";
    const h = document.createElement('h6');
    h.innerText=content;
    coll.append(h);
    father.append(coll);
}

// const createButton = (id, text, icon, target) => {
//     const btn = document.createElement('a');
//     btn.id = id;
//     btn.className = "waves-effect waves-light btn modal-trigger";
//     btn.data-target = target;
//     btn.innerText = text;
//     const i = document.createElement('i');
//     i.className = "material-icons left";
//     i.innerText = icon;
//     return btn;


//     <a class="waves-effect waves-light btn modal-trigger" data-target="modal${brewery.id}" ><i class="material-icons left">delete</i>Remove</a>
// }

const createModal = (modalId, yesBtnId, content) => {
    const div1 = document.createElement('div');
    div1.id = modalId;
    div1.class = "modal";
    const div2 = document.createElement('div');
    div2.className = "modal-content";
    const cont = document.createElement('h4');
    cont.innerText = content;
    const div3 = document.createElement('div');
    div3.class = "modal-footer";
    const a1 = document.createElement('a');
    a1.class = "modal-close waves-effect waves-green btn-flat";
    a1.innerText = "No";
    const a2= document. createElement('a');
    a2.id = yesBtnId;
    a2.className = "modal-close waves-effect waves-green btn-flat";
    a2.innerText = "Yes";

    div3.append(a1, a2)
    cont.append(div3);
    div2.append(cont);
    div1.append(div2);

    return div1;
}

//check colors
const displayFavorite = (brewery) => {
        // console.log(Object.entries(brewery));
    const breweryCard = document.createElement('div');
    // const collapsibleCard = createCollapsibleCard(brewery.name, brewery.id, 'star');
    // collapsibleItem(`Type: ${brewery.type}`, collapsibleCard);
    // collapsibleItem(`Adress: ${brewery.address}` ,collapsibleCard);
    // collapsibleItem(`Food: ${brewery.food}`, collapsibleCard);
    // collapsibleItem(`Beer Rating: ${brewery.beer_rating}`, collapsibleCard);
    // collapsibleItem(`Comments: ${brewery.comments}`, collapsibleCard);
    // const li = document.createElement('li');
    // li.innerHTML = `h6>Website: <a href=${brewery.website}>${brewery.website}</a></h6>`;
    // collapsibleCard.append(li);
    // const li2 = document.createElement('li');
    // li2.className = "collection-item right-align"
    // li2.innerHTML = `<button id="edit-${brewery.id}" class="waves-effect waves-light btn"><i class="material-icons left">edit</i>Edit</button>
    // <a class="waves-effect waves-light btn modal-trigger" data-target="modal${brewery.id}" ><i class="material-icons left">delete</i>Remove</a>`
    // collapsibleCard.append(li2);
    // const popMessage = createModal(brewery.id, brewery.id, `Remove ${brewery.name} from favorites?`)
    // breweryCard.append(collapsibleCard);

    
    

    



    


    breweryCard.innerHTML = `
    <ul class="collapsible popout" id="b${brewery.id}">
    <li>
      <div class="collapsible-header card-panel teal lighten-2"><i class="material-icons large">star</i><h5 id="brewery-name">${brewery.name}</h5></div>
        <div class="collapsible-body">
            <ul class="collection left-align">
                <li class="collection-item"><h6>Type: ${brewery.type}</h6></li>
                <li class="collection-item"><h6>Adress: ${brewery.address}</h6></li>
                <li class="collection-item"><h6>Website: <a href=${brewery.website}>${brewery.website}</a></h6></li>
                <li class="collection-item"><h6>Food: ${brewery.food}</h6></li>
                <li class="collection-item"><h6>Beer Rating: ${brewery.beer_rating}</h6></li>
                <li class="collection-item"><h6>Comments: ${brewery.comments}</h6></li>
                <li class="collection-item right-align">
                    <button id="edit-${brewery.id}" class="waves-effect waves-light btn"><i class="material-icons left">edit</i>Edit</button>
                    <a class="waves-effect waves-light btn modal-trigger" data-target="modal${brewery.id}" ><i class="material-icons left">delete</i>Remove</a>
                </li>
            </ul>
        </div>
    </li>
    <div id="modal${brewery.id}" class="modal">
    <div class="modal-content">
      <h4>Remove ${brewery.name} from favorites?</h4>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">No</a>
      <a href="#!" id="${brewery.id}" class="modal-close waves-effect waves-green btn-flat">Yes</a>
    </div>
  </div>`

    console.log(breweryCard);
    mainDiv().append(breweryCard);
    deleteBtnEvent(delBtn(brewery.id));
    initializeComponents();

}

const fillBreweryObject = (brewery) => {
    const breweryObject = {
        id: "",
        name: "",
        lookup_name:"",
        type: "",
        address: "",
        city:"",
        website:"",
        beer_rating:"",
        food:"",
        comments:""
    }
    breweryObject.id = brewery.id
    breweryObject.name = brewery.name;
    breweryObject.lookup_name = brewery.lookup_name;
    breweryObject.beer_rating = brewery.beer_rating;
    breweryObject.food = brewery.food;
    breweryObject.comments = brewery.comments;
    fetchBreweryByName(brewery.lookup_name)
    .then(brewery => {
        breweryObject.type = brewery.brewery_type;
        breweryObject.address = brewery.street;
        breweryObject.city = brewery.city
        breweryObject.website = brewery.website_url
       displayFavorite(breweryObject)})
    //    console.log(brewery)})
}
    
const setTitle = (name) => {}


/* Fetch functions  */

// check error messages

const fetchFavoritesByState = (state) => {
    fetch(`http://localhost:3000/favorites?state=${state}`)
    .then(response => response.json())
    .then(breweries => breweries.forEach(brewery => {
        fillBreweryObject(brewery)}))
    .catch(error => window.alert(error.message));
}

const fetchBreweryByName = (name) => {
    return fetch(`https://api.openbrewerydb.org/breweries/${name}`)
    .then(response => response.json())
    .catch(error => window.alert(error.message));
}

const deleteFavorite = (id) => {
    return fetch(`http://localhost:3000/favorites/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .catch(error => window.alert(error.message));
}

const createSection = (content) => {
    const section = document.createElement('div');
   section.class = "divider"
   section.innerHTML = `   
   <div class="section">
     ${content}
   </div>
   <div class="divider"></div>`
   return section
}

const statePage = (state) => {
    mapVisible(false);
    stateNameTitle = createSection(`<h4>${state}</h4>`);
    addButtonSection = createSection(`<div class="row">
    <div class="col s6"><h5 class="left-align">Your Favorites:</h5></div>`)

//     <div class="col s6"><h5 class="right-align"><button class="waves-effect waves-light btn"><i class="material-icons left">add</i>Add Favorite</button></h5></div>
//   </div>


  



//    const divider = document.createElement('div')
//    divider.class = "divider"
//    divider.append(stateNameTitle)

   mainDiv().append(stateNameTitle, addButtonSection);

   fetchFavoritesByState(state);

}


// Using Map from https://clickablemapmaker.com/
const renderMap = () => {
    var ClickableMap={};(function(){var version='1.0.0';var classPrefix='cmm-usa-';var creditLinkUrl='https://www.clickablemapmaker.com';var stateCount=0;var maxTableColumns=5;var global=this;this.getEleById=function(id){return document.getElementById(id)};this.getEleByQuery=function(query){return document.querySelector(query)};this.stateIdToDomClass=function(stateId){return classPrefix+'state-'+stateId.toLowerCase()};this.version=version;function createBaseGlobalData(){return{version:version,width:'800',widthUnits:'px',fontSize:'12px',fontName:'Arial',fill:'#97e2bb',hoverFill:'#ffffff',disabledFill:'#c2c2c2',backgroundFill:'#ffffff',innerLabelColor:'#000000',outerLabelColor:'#000000',hoverLabelColor:'#D64933',borderType:null,borderStroke:'#49bc95',enableShadows:true,popLink:false,showStateTitleAndDescOnHover:true,showLinksList:false,globalLinkUrl:null,globalJsCallback:null,mapTitle:'Choose your state below',creditLink:'Create a clickable USA map at ClickableMapMaker.com'}}function createBaseStatesData(){var statesData={AL:{fullName:'Alabama'},AK:{fullName:'Alaska'},AZ:{fullName:'Arizona'},AR:{fullName:'Arkansas'},CA:{fullName:'California'},CO:{fullName:'Colorado'},CT:{fullName:'Connecticut'},DE:{fullName:'Delaware'},DC:{fullName:'District Of Columbia'},FL:{fullName:'Florida'},GA:{fullName:'Georgia'},HI:{fullName:'Hawaii'},ID:{fullName:'Idaho'},IL:{fullName:'Illinois'},IN:{fullName:'Indiana'},IA:{fullName:'Iowa'},KS:{fullName:'Kansas'},KY:{fullName:'Kentucky'},LA:{fullName:'Louisiana'},ME:{fullName:'Maine'},MD:{fullName:'Maryland'},MA:{fullName:'Massachusetts'},MI:{fullName:'Michigan'},MN:{fullName:'Minnesota'},MS:{fullName:'Mississippi'},MO:{fullName:'Missouri'},MT:{fullName:'Montana'},NE:{fullName:'Nebraska'},NV:{fullName:'Nevada'},NH:{fullName:'New Hampshire'},NJ:{fullName:'New Jersey'},NM:{fullName:'New Mexico'},NY:{fullName:'New York'},NC:{fullName:'North Carolina'},ND:{fullName:'North Dakota'},OH:{fullName:'Ohio'},OK:{fullName:'Oklahoma'},OR:{fullName:'Oregon'},PA:{fullName:'Pennsylvania'},RI:{fullName:'Rhode Island'},SC:{fullName:'South Carolina'},SD:{fullName:'South Dakota'},TN:{fullName:'Tennessee'},TX:{fullName:'Texas'},UT:{fullName:'Utah'},VT:{fullName:'Vermont'},VA:{fullName:'Virginia'},WA:{fullName:'Washington'},WV:{fullName:'West Virginia'},WI:{fullName:'Wisconsin'},WY:{fullName:'Wyoming'}};for(var stateId in statesData){if(!statesData.hasOwnProperty(stateId)){continue}statesData[stateId].title=statesData[stateId].fullName;statesData[stateId].description=null;statesData[stateId].longDescription=null;statesData[stateId].linkUrl=null;statesData[stateId].isDisabled=false;statesData[stateId].isHovering=false;statesData[stateId].cssClass=null;statesData[stateId].overrideFill=null;statesData[stateId].overrideFillEnabled=false;statesData[stateId].overrideHoverFill=null;statesData[stateId].overrideHoverFillEnabled=false;statesData[stateId].overridePopLink=null,stateCount++}return statesData}function stateOn(stateId){if(this.statesData[stateId].isHovering){return}this.statesData[stateId].isHovering=true;var $stateLink=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId));var $statePath=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId)+' path');var $stateText=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId)+' text');if(this.statesData[stateId].isDisabled){$statePath.style.fill=this.globalData.disabledFill;$stateLink.style.cursor='default'}else if(this.statesData[stateId].overrideHoverFillEnabled&&this.statesData[stateId].overrideHoverFill!=null){$statePath.style.fill=this.statesData[stateId].overrideHoverFill;$stateText.style.fill=this.globalData.hoverLabelColor;$stateLink.style.cursor='pointer'}else{$statePath.style.fill=this.globalData.hoverFill;$stateText.style.fill=this.globalData.hoverLabelColor;$stateLink.style.cursor='pointer'}if(this.globalData.showStateTitleAndDescOnHover){var $hoverStateInfo=global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'hover-state-info');var titleText=this.statesData[stateId].title==null?'':this.statesData[stateId].title;var descText=this.statesData[stateId].description==null?'':this.statesData[stateId].description;var longDescText=this.statesData[stateId].longDescription==null?'':this.statesData[stateId].longDescription;var titleSpan=document.createElement('span');var descSpan=document.createElement('span');titleSpan.textContent=titleText;if(longDescText!=''){descSpan.innerHTML=longDescText}else{descSpan.textContent=descText}while($hoverStateInfo.firstChild){$hoverStateInfo.removeChild($hoverStateInfo.firstChild)}$hoverStateInfo.appendChild(titleSpan);$hoverStateInfo.appendChild(descSpan);$hoverStateInfo.style.display='block'}if(!this.statesData[stateId].isDisabled&&this.globalData.enableShadows){statePathBlur=$statePath.cloneNode(true);statePathBlur.setAttribute('filter','url(#'+this.$map.id+'-blur-filter)');statePathBlur.setAttribute('class',classPrefix+'state-shadow');$stateLink.parentNode.appendChild(statePathBlur);$stateLink.parentNode.appendChild($stateLink)}}function stateOff(stateId){this.statesData[stateId].isHovering=false;var $statePath=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId)+' path');var $stateText=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId)+' text');var isOuterLabel=$stateText.getAttribute('class')==classPrefix+'outer-label';if(this.globalData.showStateTitleAndDescOnHover){var $hoverStateInfo=global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'hover-state-info');$hoverStateInfo.style.display='none'}if(this.statesData[stateId].isDisabled){$statePath.style.fill=this.globalData.disabledFill}else if(this.statesData[stateId].overrideFillEnabled&&this.statesData[stateId].overrideFill!=null){$statePath.style.fill=this.statesData[stateId].overrideFill;$stateText.style.fill=isOuterLabel?this.globalData.outerLabelColor:this.globalData.innerLabelColor}else{$statePath.style.fill=this.globalData.fill;$stateText.style.fill=isOuterLabel?this.globalData.outerLabelColor:this.globalData.innerLabelColor}var allShadows=document.querySelectorAll('#'+this.$map.id+' .'+classPrefix+'state-shadow');Array.prototype.map.call(Array.prototype.slice.call(allShadows),function(ele){ele.parentNode.removeChild(ele)})}this.create=function(wrapperId){return new this.mapObject(wrapperId)};this.mapObject=function(wrapperId){this.$map=global.getEleById(wrapperId);this.globalData=createBaseGlobalData();this.statesData=createBaseStatesData();for(var stateId in this.statesData){if(!this.statesData.hasOwnProperty(stateId)){continue}(function(stateId){var $stateLink=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId));var self=this;$stateLink.addEventListener('mouseover',function(e){stateOn.call(self,stateId)});$stateLink.addEventListener('mouseout',function(e){stateOff.call(self,stateId)});$stateLink.addEventListener('click',e => statePage(e.target.parentNode.firstChild.innerHTML));$stateLink=null}.call(this,stateId))}global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'blur-filter').setAttribute('id',this.$map.id+'-blur-filter')};this.mapObject.prototype.getDomId=function(){return this.$map.id};this.mapObject.prototype.draw=function(){this.$map.style.width=this.globalData.width+this.globalData.widthUnits;this.$map.style.backgroundColor=this.globalData.backgroundFill;this.$map.style.fontFamily=this.globalData.fontName;this.$map.style.fontSize=this.globalData.fontSize;global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'title').textContent=this.globalData.mapTitle;if(this.globalData.creditLink!=null&&this.globalData.creditLink!=''){global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'credit-link').innerHTML='<a target="_blank" href="'+creditLinkUrl+'"></a>';global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'credit-link a').textContent=this.globalData.creditLink}else{global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'credit-link').innerHTML=''}for(var stateId in this.statesData){if(!this.statesData.hasOwnProperty(stateId)){continue}var stateDomClass=global.stateIdToDomClass(stateId);var $stateTitle=global.getEleByQuery('#'+this.$map.id+' .'+stateDomClass+' title');var $stateDescription=global.getEleByQuery('#'+this.$map.id+' .'+stateDomClass+' desc');$stateTitle.textContent=this.statesData[stateId].title;$stateDescription.textContent=this.statesData[stateId].description;var $statePath=global.getEleByQuery('#'+this.$map.id+' .'+stateDomClass+' path');$statePath.style.stroke=this.globalData.borderStroke;if(this.globalData.borderType!=null){$statePath.style.strokeDasharray=this.globalData.borderType}else{$statePath.style.strokeDasharray='none'}if(this.statesData[stateId].isDisabled){$statePath.style.fill=this.globalData.disabledFill}else if(this.statesData[stateId].overrideFillEnabled&&this.statesData[stateId].overrideFill!=null){$statePath.style.fill=this.statesData[stateId].overrideFill}else{$statePath.style.fill=this.globalData.fill}var $allLabels=document.querySelectorAll('#'+this.$map.id+' .'+stateDomClass+' text');for(var i=0;i<$allLabels.length;++i){$allLabels.item(i).style.fill=this.globalData.innerLabelColor}this.wireStateLink(stateId,false)}var $outerLabels=document.querySelectorAll('#'+this.$map.id+' .'+classPrefix+'outer-label');for(var i=0;i<$outerLabels.length;++i){$outerLabels.item(i).style.fill=this.globalData.outerLabelColor}if(this.globalData.showLinksList){this.displayMapLinksList()}else{global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'listview').innerHTML=''}this.$map.style.display='block'};this.mapObject.prototype.getGlobalData=function(){return this.globalData};this.mapObject.prototype.getStatesData=function(){return this.statesData};this.mapObject.prototype.setGlobalData=function(data){for(var setting in this.globalData){if(!this.globalData.hasOwnProperty(setting)||!data.hasOwnProperty(setting)){continue}this.globalData[setting]=data[setting]}};this.mapObject.prototype.setStatesData=function(data){for(var state in this.statesData){if(!this.statesData.hasOwnProperty(state)||!data.hasOwnProperty(state)){continue}for(var setting in this.statesData[state]){if(!this.statesData[state].hasOwnProperty(setting)||!data[state].hasOwnProperty(setting)){continue}this.statesData[state][setting]=data[state][setting]}}};this.mapObject.prototype.wireStateLink=function(stateId,addLiveClassName,linkType){var clickFn=null;linkType=linkType?linkType:'';var $stateLink=global.getEleByQuery('#'+this.$map.id+' .'+global.stateIdToDomClass(stateId)+linkType);if(this.statesData[stateId].cssClass!=null){$stateLink.setAttribute('class',$stateLink.getAttribute('class')+' '+this.statesData[stateId].cssClass)}if(this.statesData[stateId].isDisabled){clickFn=null}else if(this.statesData[stateId].linkUrl!=null){var self=this;clickFn=function(e){var isPop=false;if(self.statesData[stateId].overridePopLink!=null){isPop=self.statesData[stateId].overridePopLink}else if(self.globalData.popLink){isPop=true}if(isPop){window.open(self.statesData[stateId].linkUrl)}else{document.location.href=self.statesData[stateId].linkUrl}}}else if(this.globalData.globalLinkUrl!=null){var self=this;clickFn=function(e){var normalizedUrl=self.globalData.globalLinkUrl.replaceAll('@state',stateId);var isPop=false;if(self.statesData[stateId].overridePopLink!=null){isPop=self.statesData[stateId].overridePopLink}else if(self.globalData.popLink){isPop=true}if(isPop){window.open(normalizedUrl)}else{document.location.href=normalizedUrl}}}else if(this.globalData.globalJsCallback!=null){var self=this;clickFn=function(e){var fn=window[self.globalData.globalJsCallback];if(typeof fn=='function'){fn(stateId)}else{console.log('Unable to execute function: '+self.globalData.globalJsCallback+'("'+stateId+'")')}}}$stateLink.onclick=clickFn;if(addLiveClassName){var liveLinkClassName=classPrefix+'live-link';$stateLink.className=$stateLink.className.replace(' '+liveLinkClassName,'');if(clickFn!=null){$stateLink.className=$stateLink.className+' '+liveLinkClassName}}};this.mapObject.prototype.displayMapLinksList=function(){var $linkList=global.getEleByQuery('#'+this.$map.id+' .'+classPrefix+'listview');var allListsHtml='';var stateIds=[];for(var stateId in this.statesData){if(!this.statesData.hasOwnProperty(stateId)){continue}stateIds.push(stateId)}var widthPercent=Math.floor(100/maxTableColumns);var itemsPerList=Math.ceil(stateCount/maxTableColumns);var sliceStart=0;for(var i=0;i<maxTableColumns;++i){var slicedIds=stateIds.slice(sliceStart,sliceStart+itemsPerList);sliceStart+=itemsPerList;if(slicedIds.length>0){var ul=document.createElement('UL');ul.style.maxWidth=widthPercent+'%';for(var x=0;x<slicedIds.length;++x){var li=document.createElement('LI');li.appendChild(document.createElement('SPAN'));var a=document.createElement('A');a.className=classPrefix+'state-'+slicedIds[x].toLowerCase()+'-listview';a.textContent=this.statesData[slicedIds[x]].title;li.appendChild(a);ul.appendChild(li)}$linkList.appendChild(ul)}}for(var stateId in this.statesData){if(!this.statesData.hasOwnProperty(stateId)){continue}this.wireStateLink(stateId,true,'-listview')}};if(typeof exports!=='undefined'){module.exports=this}}).apply(ClickableMap);var myUsaMap=ClickableMap.create('cmm-usa');myUsaMap.setGlobalData({"version":"1.0.0","width":"600","widthUnits":"px","fontSize":"12px","fontName":"Arial","fill":"#e5b621","hoverFill":"#ffffff","disabledFill":"#c2c2c2","backgroundFill":"#ffffff","innerLabelColor":"#000000","outerLabelColor":"#000000","hoverLabelColor":"#000000","borderType":null,"borderStroke":"#3f3f3f","enableShadows":true,"popLink":false,"showStateTitleAndDescOnHover":true,"showLinksList":false,"globalLinkUrl":null,"globalJsCallback":"clickMap","mapTitle":null,"creditLink":null});myUsaMap.setStatesData({"AL":{"fullName":"Alabama","title":"Alabama","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"AK":{"fullName":"Alaska","title":"Alaska","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"AZ":{"fullName":"Arizona","title":"Arizona","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"AR":{"fullName":"Arkansas","title":"Arkansas","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"CA":{"fullName":"California","title":"California","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"CO":{"fullName":"Colorado","title":"Colorado","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"CT":{"fullName":"Connecticut","title":"Connecticut","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"DE":{"fullName":"Delaware","title":"Delaware","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"DC":{"fullName":"District Of Columbia","title":"District Of Columbia","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"FL":{"fullName":"Florida","title":"Florida","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"GA":{"fullName":"Georgia","title":"Georgia","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"HI":{"fullName":"Hawaii","title":"Hawaii","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"ID":{"fullName":"Idaho","title":"Idaho","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"IL":{"fullName":"Illinois","title":"Illinois","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"IN":{"fullName":"Indiana","title":"Indiana","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"IA":{"fullName":"Iowa","title":"Iowa","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"KS":{"fullName":"Kansas","title":"Kansas","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"KY":{"fullName":"Kentucky","title":"Kentucky","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"LA":{"fullName":"Louisiana","title":"Louisiana","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"ME":{"fullName":"Maine","title":"Maine","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MD":{"fullName":"Maryland","title":"Maryland","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MA":{"fullName":"Massachusetts","title":"Massachusetts","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MI":{"fullName":"Michigan","title":"Michigan","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MN":{"fullName":"Minnesota","title":"Minnesota","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MS":{"fullName":"Mississippi","title":"Mississippi","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MO":{"fullName":"Missouri","title":"Missouri","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"MT":{"fullName":"Montana","title":"Montana","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NE":{"fullName":"Nebraska","title":"Nebraska","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NV":{"fullName":"Nevada","title":"Nevada","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NH":{"fullName":"New Hampshire","title":"New Hampshire","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NJ":{"fullName":"New Jersey","title":"New Jersey","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NM":{"fullName":"New Mexico","title":"New Mexico","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NY":{"fullName":"New York","title":"New York","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"NC":{"fullName":"North Carolina","title":"North Carolina","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"ND":{"fullName":"North Dakota","title":"North Dakota","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"OH":{"fullName":"Ohio","title":"Ohio","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"OK":{"fullName":"Oklahoma","title":"Oklahoma","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"OR":{"fullName":"Oregon","title":"Oregon","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"PA":{"fullName":"Pennsylvania","title":"Pennsylvania","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"RI":{"fullName":"Rhode Island","title":"Rhode Island","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"SC":{"fullName":"South Carolina","title":"South Carolina","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"SD":{"fullName":"South Dakota","title":"South Dakota","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"TN":{"fullName":"Tennessee","title":"Tennessee","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"TX":{"fullName":"Texas","title":"Texas","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"UT":{"fullName":"Utah","title":"Utah","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"VT":{"fullName":"Vermont","title":"Vermont","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"VA":{"fullName":"Virginia","title":"Virginia","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"WA":{"fullName":"Washington","title":"Washington","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"WV":{"fullName":"West Virginia","title":"West Virginia","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"WI":{"fullName":"Wisconsin","title":"Wisconsin","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null},"WY":{"fullName":"Wyoming","title":"Wyoming","description":null,"longDescription":null,"linkUrl":null,"isDisabled":false,"isHovering":false,"cssClass":null,"overrideFill":null,"overrideFillEnabled":false,"overrideHoverFill":null,"overrideHoverFillEnabled":false,"overridePopLink":null}});myUsaMap.draw();

}

/* MISC */
const mapVisible = (bool) => {
    if(bool){
        mapDiv().style.display = "block";
        mapDiv().style.visibility = "visible";
    }
    else{
        mapDiv().style.display = "none";
        mapDiv().style.visibility = "hidden";
    }
}

const resetMain = () => {
    mainDiv().innerHTML = "";
}

/* Startup */

document.addEventListener('DOMContentLoaded', () => {
    renderMap();
    mapLinkClickEvent();
})


