export const isRegister = (name, surname, tc, birth, gender, mail, password, passwordReplace, setShowAlert, setAlertTitle, setAlertMessage) => {
    if (name !== "" || surname !== "" || tc !== "" || birth !== "" || mail !== "" || password !== "" || passwordReplace !== "") {
        if (name.length < 2) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("İsminizi doğru giriniz.")
        }
        else if (surname.length < 2) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("Soyadınızı doğru giriniz.")
        }
        else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(mail) === false) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("Mail adresinizi geçersiz bir formatta girdiniz")
        }
        else if ((tc.length !== 11) || ((parseInt(tc.charAt(tc.length - 1))) % 2 !== 0)) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("TC Kimlik Numaranızı doğru giriniz.")
        }
        else if ((gender !== "male") && (gender !== "female")) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("Cinsiyeti doğru belirtiniz")
        }
        else if ((password.length < 6) || (passwordReplace.length < 6)) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("Şifreniz en az 6 karakterden oluşmalıdır")
        }
        else if (password !== passwordReplace) {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("İkinci girdiğiniz şifre ilk şifre ile aynı olmalıdır");
        }
        else {
            return true;
        }
    }
    else {
        setShowAlert(true);
        setAlertTitle("Başarısız!");
        setAlertMessage("Bütün kutucukları doldurunuz.");
    }
}