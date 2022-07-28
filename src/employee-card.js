function returnCard(data) {

return `
                <div class="col-lg-3 m-2">
                    <div class="card">
                        <div class="card-body bg-light shadow">
                            <div class="card-title text-bg-primary mb-4 p-3 rounded">
                                <h2>Test</h2>
                                <h3>${data.iconlink} ${data.employee}</h3>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item border rounded">${data.id}</li>
                                <li class="list-group-item border rounded">${data.email}</li>
                                <li class="list-group-item border rounded">${data.Ofiice}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
}

module.exports = returnCard;