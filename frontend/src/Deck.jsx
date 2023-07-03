function Deck({ chapter, cost, dice, effect, id, range, rarity, title, source, index }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3 px-4" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                    {title}
                </button>
            </h2>
            <div id={`flush-collapse-${index}`} className="accordion-collapse collapse" data-bs-parent="#deckAccordion">
                <div className="accordion-body p-2">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
    )
}

export default Deck;