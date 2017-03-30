function queueInit(lists, data) {
    var queueData = new QueueElement(lists, data);
    queueData.init(queueData);
}
var QueueElement = function(lists, data) {
    this.element = this.lists;
    this.data = data;
    this.inputContent = document.getElementById('dataValue');
    this.leftInBtn = document.getElementById('leftInBtn');
    this.rightInBtn = document.getElementById('rightInBtn');
    this.leftOutBtn = document.getElementById('leftOutBtn');
    this.rightOutBtn = document.getElementById('rightOutBtn');
    this.sortBtn = document.getElementById('sortBtn');
    this.lists = document.getElementById('queueData');
    this.dataContent = document.querySelector('.queueData');
}
QueueElement.prototype = {
    init: function(obj) {
        var data = this.data;
        var _this = this;
        var str = "";
        // data.forEach(function(value,index){
        //     var node = this._crea
        // })
    },
    registEvent: function(obj) {
        this.leftInBtn.addEventListener('click', function() {
            var data = getInputValue(obj.inputContent);
            obj._unshift(obj.dataContent, data, obj.data);
        })
        this.rightInBtn.addEventListener('click', function() {
            var data = getInputValue(obj.inputContent);
            obj._push(obj.dataContent, data, obj.data);
        })
        this.leftOutBtn.addEventListener('click', function() {
            var data = getInputValue(obj.inputContent);
            obj._shift(obj.dataContent, data, obj.data);
        })
        this.rightOutBtn.addEventListener('click', function() {
            var data = getInputValue(obj.inputContent);
            obj._pop(obj.dataContent, data, obj.data);
        })
        this.queueData.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName.toLowerCase() == 'li') {

            }
        })
    },

}

window.onload = function() {
    var lists = document.getElementById('queueData');
    var data = [];
    queueInit(list, data);
}