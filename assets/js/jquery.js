$(function () {

  //ーーーー ボタンを押したらモーダルが表示されるーーー
  $("#js-open01").on("click", function () {//ボタンをクリックしたら
    $(".js-modal01").addClass("open"); // modalクラスにopenクラス付与
  });
  $("#js-open02").on("click", function () {//ボタンをクリックしたら
    $(".js-modal02").addClass("open"); // modalクラスにopenクラス付与
  });
  $("#js-open03").on("click", function () {//ボタンをクリックしたら
    $(".js-modal03").addClass("open"); // modalクラスにopenクラス付与
  });
  $("#js-open04").on("click", function () {//ボタンをクリックしたら
    $(".js-modal04").addClass("open"); // modalクラスにopenクラス付与
  });



  // ーーーー　×ボタンを押したらモーダルが閉じる　ーーーーー
  $("#js-close01").on("click", function () {//ボタンをクリックしたら
    $(".js-modal01").removeClass("open"); // modalクラスにopen"クラス外す
  });

  $("#js-close02").on("click", function () {//ボタンをクリックしたら
    $(".js-modal02").removeClass("open"); // modalクラスにopen"クラス外す

  });
  $("#js-close03").on("click", function () {//ボタンをクリックしたら
    $(".js-modal03").removeClass("open"); // modalクラスにopen"クラス外す
  });
  $("#js-close04").on("click", function () {//ボタンをクリックしたら
    $(".js-modal04").removeClass("open"); // modalクラスにopen"クラス外す
  });

});
// nextボタンをクリックしたら
// data-target2が取得される
// nextボタンがクリックされたら
// data-target2を削除される
// data-target3が取得される




  // ------- ボタン押したらnextへ　--------
  $(function() {
    $('.modal-button-conteinar').on('click',function(){
      if ($(this).attr('data-page') != 'none') {
        let nowModal = $(this).parent().attr('data-nowmodal');
        $(`#js-close${nowModal}`).click();
        $('.'+$(this).attr('data-page')).addClass("open");
      }
    })
    // // $('.modal-button-conteinar').on('click',function(){
    // //   $('.modal-skill').paginathing({//親要素のclassを記述
    // //     // perPage: 1,//1ページあたりの表示件数
    // //     // prevText:'prev',//1つ前のページへ移動するボタンのテキスト
    // //     // nextText:'next',//1つ次のページへ移動するボタンのテキスト
    // //     // activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
    // //     firstLast: false,
    // //   })
    // // }) 

     })









