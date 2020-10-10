export default function selectionFilter({ series, films }) {
    return {
        series: [
            { title: 'Documentaries', data: series.filter((item) => item.genre === "documentaries") },
            { title: 'Crime', data: series.filter((item) => item.genre === "crime") },
            { title: 'Feel Good', data: series.filter((item) => item.genre === "feel-good") },
            { title: 'Comedies', data: series.filter((item) => item.genre === "comedies") },
            { title: 'Children', data: series.filter((item) => item.genre === "children") }
        ],
        films: [
            { title: 'Drama', data: films.filter((item) => item.genre === "drama") },
            { title: 'Thriller', data: films.filter((item) => item.genre === "thriller") },
            { title: 'Suspense', data: films.filter((item) => item.genre === "suspense") },
            { title: 'Romance', data: films.filter((item) => item.genre === "romance") },
            { title: 'Children', data: films.filter((item) => item.genre === "children") }
        ]
    }
}