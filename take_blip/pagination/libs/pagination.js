/**
 * 
 * @param {Array} list 
 * @param {Number} this.perPage 
 *
 */
function Pagination(list, perPage) {


    this.currentPage = 1
    this.perPage = perPage
    this.list = list

    this.goToFirstPage = () => {
        this.currentPage = 1
    }

    this.goToLastPage = () => {
        this.currentPage = this._getTotalPages()
    }

    this.setNextPage = () => {
        this.currentPage++
    }

    this.setBackPage = () => {
        this.currentPage--
    }


    this._getListSize = () => list.length

    this._getTotalPages = () => {
        let numberElementsForPage = this._getListSize() / this.perPage
        if (!Number.isInteger(numberElementsForPage)) {
            numberElementsForPage++
        }

        return Math.trunc(numberElementsForPage)
    }

    this._getPageIndexReferences = () => {
        let lastElementIndex = (this.currentPage * this.perPage)

        return {
            firstElementIndex: lastElementIndex - this.perPage,
            lastElementIndex: lastElementIndex,
            numberforPages: this.perPage,
            totalOfPage: this._getTotalPages(),
            currentPage: this.currentPage
        }
    }

    this.getPage = () => {

        if (this.currentPage > this._getTotalPages()) {
            this.goToFirstPage()
        } else if (this.currentPage <= 0) {
            this.goToLastPage()
        }


        let pageIndex = this._getPageIndexReferences()
        let elements = this.list.slice(
            pageIndex.firstElementIndex,
            pageIndex.lastElementIndex
        )

        pageIndex.elements = elements

        delete pageIndex.firstElementIndex
        delete pageIndex.lastElementIndex

        return pageIndex
    }






}


function main() {
    let pag = new Pagination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3)
    // console.log(pag._getPageIndexReferences())
    console.log(pag.getPage())

    // pag.setNextPage()
    // console.log(pag._getPageIndexReferences())

    // pag.setNextPage()
    // console.log(pag._getPageIndexReferences())

    // pag.setNextPage()
    // console.log(pag._getPageIndexReferences())

}

main()

module.exports = { Pagination }
