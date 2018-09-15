$(document).ready(function() {
  $("#form").validate({
    rules: {
      name: {
        required: true
      },
      name_yomi: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      age: {
        required: true,
        number: true
      },
      post_number: {
        required: true,
        number: true,
        minlength: 7
      },
      pref: {
        required: true
      },
      address_1: {
        required: true
      },
      phone_number: {
        required: true,
        number: true,
        minlength: 7,
        maxlength: 11
      }
    },
    messages: {
      name: {
        required: '名前(全角)を入力してください',
      },
      name_yomi: {
        required: '名前(フリガナ)を入力してください'
      },
      email: {
        required: 'メールアドレスを入力してください',
        email: '有効なメールアドレスの形式で入力してください'
      },
      age: {
        required: '年齢を入力してください',
        number: '数字(半角)を入力してください'
      },
      post_number: {
        required: '郵便番号を入力してください',
        number: '数字(半角)で入力してください',
        minlength: '7桁で入力してください'
      },
      pref: {
        required: '都道府県を選択してください'
      },
      address_1: {
        required: '住所を入力してください'
      },
      phone_number: {
        required: '電話番号を入力してください',
        number: '数字(半角)で入力してください',
        minlength: '電話番号の形式を入力してください',
        maxlength: '電話番号の形式を入力してください'
      }
    }
  });
});

