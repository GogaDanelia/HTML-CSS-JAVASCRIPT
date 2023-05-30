function gotoPage(pagetogo) {
	window.location = pagetogo;
}

function gotoPageConfirm(pagetogo, confstr) {
	var name = confirm(confstr);
	if (name == true) {
		window.location = pagetogo;
	}
}

function changeImageSource(elementid, imagepath){
	if(document.getElementById){
		document.getElementById(elementid).src=imagepath;
	}else if(document.all){
		document.all[elementid].src=imagepath;
	}
}

function chngPass(pass_fld, chkd) {
	if (chkd.checked)
		pass_fld.disabled = false;
	else
		pass_fld.disabled = true;
}

function adTobasket(frmid, id, price, qty){
	var frmId=document.getElementById(frmid);
	document.getElementById('bsktfrmid').value=id;
	document.getElementById('bsktfrmprice').value=price;
	document.getElementById('bsktfrmqty').value=qty;
	frmId.submit();
}

function voidkey() {
	return false;
}

function clear_fld(e, str) {
	if (e.value == str) {
		e.value = "";
		return false;
	}
}

function gotoPageConfirm(pagetogo, confstr) {
	var name = confirm(confstr);
	if (name == true) {
		window.location = pagetogo;
	}
}

function frmSbmtHiMenuTypeById(frmid, histr, tidval) {
	var frm = document.getElementById(frmid);
	frm.elements[0].value=histr;
	frm.elements[2].value=tidval;
	frm.submit();
}


function frmSubmitbyId(frmid) {
	var frmid = document.getElementById(frmid);
	frmid.submit();
}

function frmSbmtHiById(frmid, elmntnumber, histr) {
	var frm = document.getElementById(frmid);
	frm.elements[elmntnumber].value=histr;
	frm.submit();
}

function frmSbmtHiByIdSetMultiple(frmid, elmntnsCnt, vals) {

	var frm = document.getElementById(frmid);
	for(i=0; i<elmntnsCnt; i++)
	frm.elements[i].value=vals[i];
	frm.submit();
}

function frmSbmtHi(frm, histr) {
	//var frm = document.getElementById(frmid);

	frm.hi.value=histr;
	//frm.elements[elmntnumber].value=histr;
	//frmid.submit();
}

function frmSbmtOdrHi2(frmid, hi2str, asgnflag){
	var frm = document.getElementById(frmid);
	
	if(asgnflag==1) {		
		document.getElementById('ordrauthemail').value=document.getElementById('authemail').value;
		document.getElementById('ordrauthpass').value=document.getElementById('authpass').value;
	}
	frm.hi2.value=hi2str;
	frm.submit();
}

function chngRel(title) {
	var i, j;
	var cnt=document.getElementsByTagName("link").length;

	for (i = 0; i<cnt; i++) {
		j=document.getElementsByTagName("link")[i];
		if (j.getAttribute("rel").indexOf("style") != -1 && j.getAttribute("title")!=false) {
			j.disabled = true;
			if (j.getAttribute("title") == title) j.disabled = false;
		}
	}
}

function chngVisibility(elmntid, chkid) {
	if (document.getElementById) {
		var elmntId = document.getElementById(elmntid);
		var elmntChkid = document.getElementById(chkid);
	} else if (document.all) {
		var elmntId = document.all[elmntid];
		var elmntChkid = document.all[chkid];
	}

	if(elmntChkid.checked==true){
		elmntId.style.visibility='visible';
		elmntId.style.position='relative';
	}else if(elmntChkid.checked==false){
		elmntId.style.visibility='hidden';
		elmntId.style.position='absolute';
	}
}

function showHideContnt(elmntid) {
	if (document.getElementById) {
		var elmntId = document.getElementById(elmntid);
	} else if (document.all) {
		var elmntId = document.all[elmntid];
	}

	if(elmntId.style.visibility=='hidden'){
		elmntId.style.visibility='visible';
		elmntId.style.position='relative';
	}else if(elmntId.style.visibility=='visible'){
		elmntId.style.visibility='hidden';
		elmntId.style.position='absolute';
	}
}
