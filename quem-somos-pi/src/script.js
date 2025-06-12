document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.activity-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.stopPropagation();

            // Fecha popover anterior se existir
            document.querySelectorAll('.activity-popover-overlay').forEach(el => el.remove());

            // Dados do card
            const desc = this.getAttribute('data-desc');
            const title = this.querySelector('span') ? this.querySelector('span').textContent : '';
            // Pega o src e alt da imagem do card
            const imgEl = this.querySelector('.activity-img img');
            const imgSrc = imgEl ? imgEl.getAttribute('src') : '';
            const imgAlt = imgEl ? imgEl.getAttribute('alt') : '';

            // Cria overlay
            const overlay = document.createElement('div');
            overlay.className = 'activity-popover-overlay';

            // Cria popover
            const popover = document.createElement('div');
            popover.className = 'activity-popover';
            popover.innerHTML = `
                <div class="activity-popover-img">
                    <img src="${imgSrc}" alt="${imgAlt}" style="width:100%;height:auto;border-radius:8px;">
                </div>
                <div class="activity-popover-content">
                    <span class="activity-popover-close" title="Fechar">&times;</span>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            `;

            // Fecha ao clicar no X
            popover.querySelector('.activity-popover-close').onclick = function(e) {
                e.stopPropagation();
                overlay.remove();
            };

            // Fecha ao clicar fora do popover
            overlay.onclick = function() {
                overlay.remove();
            };
            popover.onclick = function(e) {
                e.stopPropagation();
            };

            // Adiciona popover ao overlay e overlay ao body
            overlay.appendChild(popover);
            document.body.appendChild(overlay);
        });
    });
});