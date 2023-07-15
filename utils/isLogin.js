export const isLogin = (mail, password, setShowAlert, setAlertTitle, setAlertMessage) => {
    if (mail.length !== 0 && password !== 0) {
        if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(mail) == true) {
            if (password.length >= 6) {
                return true;
            }
            else {
                setShowAlert(true);
                setAlertTitle("Hata!");
                setAlertMessage("Şifreniz yanlış");
            }
        }
        else {
            setShowAlert(true);
            setAlertTitle("Hata!");
            setAlertMessage("Girdiğiniz E-Mail adresi geçersiz");
        }
    }
    else {
        setShowAlert(true);
        setAlertTitle("Hata!");
        setAlertMessage("Kutucukları Lütfen Boş Bırakmayınız.");
    }
}