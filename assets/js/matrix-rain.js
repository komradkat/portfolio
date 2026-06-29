if (!window.matrixRainInitialized) {
    window.matrixRainInitialized = true;

    const canvas = document.getElementById('matrix-rain');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let columns = Math.floor(width / 20);
        const yPositions = Array(columns).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        function matrix() {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;
                ctx.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        }

        let intervalId = setInterval(matrix, 50);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const newColumns = Math.floor(width / 20);
            if (newColumns > yPositions.length) {
                for (let i = yPositions.length; i < newColumns; i++) {
                    yPositions.push(Math.random() * height);
                }
            } else if (newColumns < yPositions.length) {
                yPositions.length = newColumns;
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(intervalId);
            } else {
                intervalId = setInterval(matrix, 50);
            }
        });
    }
}
