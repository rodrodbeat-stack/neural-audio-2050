<!-- REPRODUCTOR / VISUALIZADOR -->
<div class="visualizer-panel">
    <h3>VISUALIZADOR ///</h3>
    <canvas id="neural-canvas" width="300" height="90"></canvas>
</div>

<!-- PANEL DEL GENERADOR / LISTA -->
<div class="playlist-panel">
    <button id="generate-playlist-btn" class="btn-generar">▷ GENERAR PLAYLIST</button>
    <div id="playlist-tracks-container" class="track-list-body">
        <!-- Las canciones se inyectan dinámicamente aquí -->
    </div>
</div>

<!-- CONTROLES DEL REPRODUCTOR -->
<div class="audio-controls">
    <span id="current-track-title" class="player-track-title">Neon Shadows</span>
    <span id="current-track-artist" class="player-track-artist">Synth Core</span>
    <button id="prev-btn">|◀</button>
    <button id="play-btn">▶ / ⏸</button>
    <button id="next-btn">▶|</button>
</div>

<!-- SECCIÓN CYBER TERMINAL INTERACTIVA -->
<div class="terminal-panel">
    <h3>CYBER TERMINAL ///</h3>
    <div id="cyber-terminal-logs"></div>
    <div class="terminal-input-line">
        <span class="terminal-prompt">› </span>
        <input type="text" id="cyber-terminal-input" placeholder="Inject core command (/help)..." autocomplete="off">
    </div>
</div>
