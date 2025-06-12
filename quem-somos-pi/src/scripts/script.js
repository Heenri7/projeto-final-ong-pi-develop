document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.activity-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.stopPropagation();

            // Fecha popover anterior se existir
            document.querySelectorAll('.activity-popover-overlay').forEach(el => el.remove());

            // Dados do card
            const desc = this.getAttribute('data-desc');
            const title = this.querySelector('span') ? this.querySelector('span').textContent : '';
            const imgHTML = this.querySelector('.activity-img') ? this.querySelector('.activity-img').innerHTML : '';

            // Cria overlay
            const overlay = document.createElement('div');
            overlay.className = 'activity-popover-overlay';

            // Cria popover
            const popover = document.createElement('div');
            popover.className = 'activity-popover';
            popover.innerHTML = `
                <div class="activity-popover-img">${imgHTML}</div>
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