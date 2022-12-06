/**
 * @param {HTMLDivElement} node
 */
export function hover(node: HTMLElement) {
    node.onmousemove = (/** @type {{ clientX: number; clientY: number; }} */ e) => {
        for (const card of node.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    }
}