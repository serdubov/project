<script src="script/list-query.js"></script>
<script src="script/feedback.js"></script>
<link rel="stylesheet" href="css/feedback.css" type="text/css">
  <div class="wrapper-list">
    <div class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="button_logo">
                        <div class="head_button" id="button_close_5">

                        </div>
                        <div class="head_logo">

                        </div>
                    </div>
                    <div class="head_mail">
                        <!-- info@youtale.ru -->
                    </div>
                    <div class="head_mail_txt">
                        <span class="mail">info@youtale.ru</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
    <div class="content-inside">
        <div class="head-form">
            <h2 class="brif-head">Оставьте заявку на разработку</h2>
        </div>
        <div class="head-form-after">
            <h2 class="brif-label-off">Наш менеджер уже готов обработать заявку</h2>
        </div>
        <div style="width:100%; text-align: left;">
            <form class="brif" action="index.php" method="POST">
                <label class="brif-label" for="person">Ваше имя</label>
                <br>
                <input class="brif-input" type="text" name="person" id="person">
                <br>
                <label class="brif-label" for="phone">Телефон</label>
                <br>
                <input class="brif-input" type="tel" name="phone" id="phone">
                <br>
                <label class="brif-label" for="mail">E-mail</label>
                <br>
                <input class="brif-input" type="email" name="mail" id="mail">
                <br>
                <label class="brif-label" for="commit">Коротко опишите задачу</label>
                <br>
                <input class="brif-input" type="commit" name="commit" id="commit">
                <br>
                <input class="form-block-checkbox" type="checkbox" name="checkbox" id="checkbox">
                <span class="checkbox-custom"></span>
                <label class="text-p" style="font-size:16px;" for="checkbox">Согласен на обработку персональных данных</label>
                <script> $(".checkbox-custom").click(function(){
                    if($(".form-block-checkbox").prop("checked")){
                        $(".form-block-checkbox").prop("checked", false);
                    }
                    else{
                        $(".form-block-checkbox").prop("checked", true);
                    }});</script>
                <br>
                <div style="width:100%; text-align: center;">
                    <input type="submit"  class="form-submit" name="submit" value="Отправить">
                </div>

            </form>
        </div>
        </div>
    </div>
    <div class="footer">
        <div class="copyrigth">
            <span class="copyrigth-txt">© Веб-студия «YouTale» 2018</span>
        </div>
        
        <div class="network">
            <div class="social vk">
                
            </div>
            <div class="social telegram">
                
            </div>
            <div class="social facebook">
                
            </div>
        </div>
    </div>
  </div>  