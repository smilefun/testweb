

function OpenListNews() {


    if (clicknews == 1) {
        window.location.replace(appPath + "");
    }
    else if (clicknews == 2) {
        window.location.replace(appPath + "");
    }
    else if (clicknews == 3) {
        window.location.replace(appPath + "");
    }
}


var clicknews = 1;
function homeclicknews(a) {
    clicknews = a;
}


function pagingImages(a, b, c) {

    $.ajax({
        type: "POST",
        url: appPath + "Images/imagesGetList",
        data: {
            AlbumID: a,
            Status: b,
            currentPage: c
        },
        success: function (data) {
            $("#list_imagesxx").html(data);
        }
    });
}



function PopupImages(a, b) {
  
    $.ajax({
        type: "POST",
        url: appPath + "Images/ImagesPopUp",
        data: {
            AlbumID: a,
            STT: b
        },
        success: function (data) {

            $('#popup_imgxxx').html(data);
            $('#popup_imgxxx').css("display", "block");
        }
    });
}

function ClosePopImg() {
    $('#popup_imgxxx').css("display", "none");
}

function pagingArt(a, b) {
    debugger;
    $.ajax({
        type: "POST",
        url: appPath + "Article/ArticleListGetAll",
        data: {
            cate_id: a,
            currentPage: b,
        },
        success: function (data) {

            $("#tabs_tintucxxx").html(data);
            window.scrollTo(0, 770);
        }
    });
}

function pagingcapnhat(a, b) {
    $.ajax({
        type: "POST",
        url: appPath + "Article/ArticleListUpdateGetAll",
        data: {
            cate_id: a,
            currentPage: b,
        },
        success: function (data) {

            $("#tabs_capnhat").html(data);
            window.scrollTo(0, 770);
        }
    });
}

function openTaigame() {
  
    document.getElementById("popupvideo").style.display = "block";
    document.getElementById("VideoBlack").style.display = "block";
}

function CloseTaigame() {
    document.getElementById("popupvideo").style.display = "none";
    document.getElementById("VideoBlack").style.display = "none";
}



window.NewsCtrl = {

    MouseOverArticleThumb: function (ImgVideo, type) {

        if (type == 1) {
            //$("#ArticleThumbHome").attr("src", ImgPath);
            $("#ArticleThumbHome").html('<img src="' + ImgVideo + '" style="width:690px; height:361px;" alt="" />');
        }
        else {
            $('#ArticleThumbHome').html('<iframe width="690" height="361" src="https://www.youtube.com/embed/' + ImgVideo + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
    },
}

function popVideoWeb(url) {
    var YTID = 'https://www.youtube.com/embed/' + url + '?autoplay=1';
    $('#vid_Web').prop('src', YTID);
    document.getElementById("pop_vd_Web").style.display = "block";
    document.getElementById("Videoweb").style.display = "block";
}

function closeVideoWeb() {
    var videoURL2 = $('#vid_Web').prop('src');
    $('#vid_Web').prop('src', '');
    document.getElementById("pop_vd_Web").style.display = "none";
    document.getElementById("Videoweb").style.display = "none";

}


function xem_them_page(a, b) {
   
    $.ajax({
        type: "POST",
        url: appPath + "Article/ArticleListGetAll",
        data: {
            cate_id: a,
            currentPage: b,
        },
        success: function (data) {
            $("#ds_bai_" + b).remove();
            $("#ds_bai_viet").append(data);

        }
    });
}




function ArtSK() {
    $.ajax({
        type: "POST",
        url: appPath + "Home/ArticleSlideIndex",
        data: {
            cate_id: 2,
            currentPage: 1,
        },
        success: function (data) {
            $("#tab_sk_2").html(data);
        }
    });
}
function ArtHD() {
    $.ajax({
        type: "POST",
        url: appPath + "Home/ArticleSlideIndex",
        data: {
            cate_id: 3,
            currentPage: 1,
        },
        success: function (data) {
            $("#tab_hd_3").html(data);
        }
    });
}