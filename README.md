echo "# desenvweb" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/alisscn/desenvweb.git
 git push -u origin main

 <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spottube - Streaming de Música</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    
    <header>
        <div class="container">
            <h1>Spottube</h1>
            <p>Seu novo jeito de ouvir música online!</p>
        </div>
    </header>

    
    <section class="info">
        <div class="container">
            <h2>O que é o Spottube?</h2>
            <p>O Spottube é uma plataforma de streaming de música que oferece uma vasta coleção de músicas de todos os gêneros. Com uma interface moderna e fácil de usar, você pode criar suas playlists, ouvir músicas sem interrupções e descobrir novos artistas.</p>

            <button id="moreInfoBtn">Saiba mais</button>
            <div id="moreInfo" class="hidden">
                <p>Além das funcionalidades básicas, o Spottube oferece também recomendações personalizadas, integração com redes sociais e podcasts exclusivos.</p>
            </div>
        </div>
    </section>

    
    <section class="features">
        <div class="container">
            <h2>Principais Funcionalidades</h2>
            <ul>
                <li>Criação de playlists personalizadas</li>
                <li>Recomendações de músicas baseadas no seu gosto</li>
                <li>Ouça suas músicas offline</li>
                <li>Qualidade de áudio em alta definição</li>
            </ul>
        </div>
    </section>

    <script src="script.js"></script>
</body>

<header>
    <div class="container">
        <h1>Spottube</h1>
        <p>Descubra novas músicas e aproveite seu streaming!</p>
    </div>
</header>

<section class="music-grid">
    <div class="container">
        <h2>Músicas Recentes</h2>
        <div class="grid">
            
            <div class="card">
                <img src="https://media.pitchfork.com/photos/64c3bee4a7c2659c4cdcf382/1:1/w_320,c_limit/Travis%20Scott%20-%20Utopia.jpeg.jpg" alt="Travis Scott - Utopia">
                <div class="info">
                    <h3>Utopia</h3>
                    <p>Artista: Travis Scott</p>
                    <p id="downloadStatus1">Download: Não disponível</p>
                    <p id="streamingStatus1">Streaming: Disponível</p>
                    <button class="download-btn" onclick="toggleDownload('downloadStatus1')">Alterar Download</button>
                    <button class="streaming-btn" onclick="toggleStreaming('streamingStatus1')">Alterar Streaming</button>
                </div>
            </div>

            
            <div class="card">
                <img src="https://media.pitchfork.com/photos/65f9e40316c62f3e7a54ad0e/1:1/w_320,c_limit/Billie-Eilish.jpg.jpg" alt="Billie Eilish- WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?">
                <div class="info">
                    <h3>WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?</h3>
                    <p>Artista: Billie Eilish</p>
                    <p id="downloadStatus2">Download: Não disponível</p>
                    <p id="streamingStatus2">Streaming: Disponível</p>
                    <button class="download-btn" onclick="toggleDownload('downloadStatus2')">Alterar Download</button>
                    <button class="streaming-btn" onclick="toggleStreaming('streamingStatus2')">Alterar Streaming</button>
                </div>
            </div>

            
            <div class="card">
                <img src="https://media.pitchfork.com/photos/599b0343d7cfca73eb7c50d5/1:1/w_320,c_limit/freudian_daniel%20caesar.jpg.jpg" alt="Daniel Caesar - Freudian">
                <div class="info">
                    <h3>Freudian</h3>
                    <p>Artista: Daniel Caesar</p>
                    <p id="downloadStatus3">Download: Não disponível</p>
                    <p id="streamingStatus3">Streaming: Disponível</p>
                    <button class="download-btn" onclick="toggleDownload('downloadStatus3')">Alterar Download</button>
                    <button class="streaming-btn" onclick="toggleStreaming('streamingStatus3')">Alterar Streaming</button>
                </div>
            </div>


            <div class="card">
                <img src="https://media.pitchfork.com/photos/5929c5515e6ef95969323ab2/1:1/w_320,c_limit/86bcd55a.jpg" alt="Cigarettes After Sex">
                <div class="info">
                    <h3>CIGARETTES AFTER SEX</h3>
                    <p>Artista: Cigarettes After Sex</p>
                    <p id="downloadStatus4">Download: Não disponível</p>
                    <p id="streamingStatus4">Streaming: Disponível</p>
                    <button class="download-btn" onclick="toggleDownload('downloadStatus4')">Alterar Download</button>
                    <button class="streaming-btn" onclick="toggleStreaming('streamingStatus4')">Alterar Streaming</button>
                </div>
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; 2024 Spottube - Todos os direitos reservados.</p>
    </div>
</footer>

<script src="script.js"></script>
</body>
</html>