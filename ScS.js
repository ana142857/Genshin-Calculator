//ロードされた際の処理として実施
window.onload = function(){
    //ボタンを押下した際にダウンロードする画像を作る
    html2canvas(document.getElementById("target"),{
        onrendered: function(canvas){
            //aタグのhrefにキャプチャ画像のURLを設定
            var imgData = canvas.toDataURL();
            document.getElementById("ss").href = imgData;
        }
    });
}