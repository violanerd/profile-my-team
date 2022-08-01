function returnCard(data) {
    for (var i = 0; i < data.length; i++){
        return `
                        <div class="col-lg-3 m-2">
                            <div class="card">
                                <div class="card-body bg-light shadow">
                                    <div class="card-title text-bg-primary mb-4 p-3 rounded">
                                        <h2>${data[i][0]}</h2>
                                        <h3><i class="fa-solid fa-mug-hot"></i>${data[i][3]}</h3>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item border rounded">${data[0][1]}</li>
                                        <li class="list-group-item border rounded">${data[0][2]}</li>
                                        <li class="list-group-item border rounded">${data[0][4]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`
    }
}

module.exports = returnCard;