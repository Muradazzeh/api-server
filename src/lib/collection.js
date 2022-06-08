`use strict`

class Collection {
    constructor(model) {
        this.model = model;
    }

    async create(obj) {
        try {
            let result = await this.model.create(obj)
            return result
        }
        catch (e) {
            console.error("this is error from create obj", this.model)

        }
    }

    async get(data_id) {
        try {
            let record = null;
            if (data_id) {
                record = await this.model.findOne({ where: { id: data_id } });
                return record;
            }
            else {
                record = await this.model.findAll();
                return record;
            }

        } catch (e) {
            console.error("error in getting record in model ", this.model)
        }
    }

    async update(obj) {
        try {
            let updated = await record.update(obj);
            return updated;
        } catch (e) {
            console.error("error in updating record in model ", this.model)
        }
    }

    async delete(data_id) {
        if (!data_id) {
            throw new Error('no id provided for model ', this.model)
        }
        try {
            let deleted = await this.model.destroy({ where: { id: data_id } });
            return deleted;
        } catch (e) {
            console.error('error in deleting record in model ', this.model);
        }
    }
}

module.exports = Collection