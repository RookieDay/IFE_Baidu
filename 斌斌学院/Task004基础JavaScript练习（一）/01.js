function queueInit(lists, data) {
    var queueData = new QueueList(lists, data);
    queueData.init(queueData);
}

var QueueList = function(lists, data) {
    this.data = data;
    this.elements = lists;
    this.inputContent = document.getElementById('inputValue');
    this.leftInBtn = document.getElementById('leftInBtn');
    this.rightInBtn = document.getElementById('rightInBtn');
    this.leftOutBtn = document.getElementById('leftOutBtn');
    this.rightOutBtn = document.getElementById('rightOutBtn');
    this.sortBtn = document.getElementById('sortBtn');
    this.dataContent = document.querySelector('.lists');
}
QueueList.prototype = {
    init: function(obj) {
        var data = this.data;
        var _this = this;
        if (this.data.length > 0) {
            data.forEach(function(value, index) {
                var node = this._createElementItem(value);
                _this.elements.appendChild(node);
            })
        } else {
            alert('wrong lists');
            return false;
        }
        this.registEvent(obj);
    },
    registEvent: function(obj) {
        this.leftInBtn.addEventListener('click', function() {
            //data inputValue
            //obj.data 数据数组 
            var data = obj.getInputValue(obj.inputContent);
            obj._unshift(obj.dataContent, data, obj.data);
        })
        this.rightInBtn.addEventListener('click', function() {
            //data inputValue
            //obj.data 数据数组 
            var data = obj.getInputValue(obj.inputContent);
            obj._push(obj.dataContent, data, obj.data);
        })
        this.leftOutBtn.addEventListener('click', function() {
            obj._shift(obj.dataContent, obj.data);
        })
        this.rightOutBtn.addEventListener('click', function() {
            obj._pop(obj.dataContent, obj.data);
        })
        this.dataContent.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName.toLowerCase() == 'li') {
                var index;
                var dataLists = this.children;
                for (var i = 0; i < dataLists.length; i++) {
                    if (dataLists[i] == e.target) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    obj.data.splice(index, 1);
                    obj.dataContent.removeChild(e.target);
                    alert("removed:" + e.target.innerText);
                } else {
                    alert("remove failed!")
                }
            }
        })
        this.sortBtn.addEventListener('click', function() {
            obj.data = obj._bubbleSort(obj.data);
            console.log(obj.data);
            obj.dataContent.innerHTML = "";
            obj.data.forEach(function(value, index) {
                var node = obj._createElementItem(value);
                document.getElementById('lists').appendChild(node);
            })
        })
    },
    getInputValue: function(element) {
        var data = Number(element.value);
        if (!data) {
            alert('pls input...');
            return null;
        } else {
            if (data >= 10 && data <= 100) {
                return data;
            } else {
                alert('err range');
            }
        }
    },
    _unshift: function(listsSelect, dataInput, dataArray) {
        if (dataInput) {
            dataArray.unshift(dataInput);
            if (this._judgeLength(dataArray)) {
                var node = this._createElementItem(dataInput);
                listsSelect.insertBefore(node, listsSelect.firstChild);
                return dataArray;
            } else {
                alert('>60');
            }
        }
        return dataArray;
    },
    _push: function(listsSelect, dataInput, dataArray) {
        if (dataInput) {
            dataArray.push(dataInput);
            if (this._judgeLength(dataArray)) {
                var node = this._createElementItem(dataInput);
                listsSelect.appendChild(node);
                return dataArray;
            } else {
                alert('>60');
            }
        }
        return dataArray;
    },
    _shift: function(listsSelect, dataArray) {
        if (dataArray.length <= 0) {
            alert('empty lists');
        } else {
            alert("remvoed:" + dataArray[0]);
            dataArray.shift();
            listsSelect.removeChild(listsSelect.children[0]);
        }
        return dataArray;
    },
    _pop: function(listsSelect, dataArray) {
        var len = dataArray.length;
        if (len <= 0) {
            alert('empty lists');
        } else {
            alert('removed:' + dataArray[len - 1]);
            dataArray.pop();
            listsSelect.removeChild(listsSelect.children[len - 1])
        }
        return dataArray;
    },
    _judgeLength: function(dataArray) {
        return dataArray.length > 60 ? false : true;
    },
    _createElementItem: function(data) {
        var node = document.createElement('li');
        node.innerText = data;
        node.setAttribute('data-num', data);
        // node.style.height = data + 'px';
        return node;
    },
    _bubbleSort: function(arr) {
        var flag = true;
        for (var i = arr.length; i >= 2 && flag; i--) {
            flag = false;
            for (var j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    flag = true;
                    this.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    },
    swap: function(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}

window.onload = function() {
    var lists = document.getElementById('lists');
    var data = [];
    queueInit(lists, data);
}