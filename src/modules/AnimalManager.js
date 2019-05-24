const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    },
    post(animalObj) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animalObj)
        }).then(e => e.json())

    },
    put(editedAnimal) {
        return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
    },
    deleteAnimal(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(e => e.json())
    }
}