//localStorage
class LocalStorage {
    static saveCameras(cameras) {
        localStorage.setItem("cameras", JSON.stringify(cameras));
    }
}