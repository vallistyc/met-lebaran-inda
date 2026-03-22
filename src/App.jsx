import { useState } from "react";
import "./App.css";

// =============================================
// GANTI URL INI SETELAH SETUP GOOGLE APPS SCRIPT
// =============================================
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycby3yRQVSfl8aKlyyG3LBCjBh2jDYo_5diZSCcOOugWHvMXH7ni9YKv8ZltBphhZ6M83/exec";

// =============================================
// APP UTAMA
// =============================================
function App() {
  const [scene, setScene] = useState("wave");

  return (
    <div className="container">
      {scene === "wave"          && <SceneWave setScene={setScene} />}
      {scene === "hurt"          && <SceneHurt setScene={setScene} />}
      {scene === "letter"        && <SceneLetter setScene={setScene} />}
      {scene === "beg"           && <SceneBeg setScene={setScene} />}
      {scene === "angry"         && <SceneAngry setScene={setScene} />}
      {scene === "thanks"        && <SceneThanks setScene={setScene} />}
      {scene === "beauty"        && <SceneBeauty setScene={setScene} />}
      {scene === "beauty_result" && <SceneBeautyResult setScene={setScene} />}
      {scene === "calculus"      && <SceneCalculus setScene={setScene} />}
      {scene === "rekening"      && <SceneRekening />}
    </div>
  );
}

// =============================================
// SCENE 1 — Nailong Melambai
// =============================================
function SceneWave({ setScene }) {
  return (
    <div className="scene">
      <div className="gif-wrapper" onClick={() => setScene("hurt")}>
        <img src="/nailong-wave.gif" alt="nailong wave" className="nailong-img" />
      </div>
      <p className="instruction">Hei! Klik aku dong~ 👆</p>
    </div>
  );
}

// =============================================
// SCENE 2 — Nailong Kesakitan
// =============================================
function SceneHurt({ setScene }) {
  return (
    <div className="scene">
      <img src="/nailong-hurt.gif" alt="nailong hurt" className="nailong-img" />
      <p className="instruction">
        ADUHHH!! Pelan-pelan dong kliknya... 😭
        <br />
        Coba lagi, tapi pelan ya!
      </p>
      <button className="click-btn" onClick={() => setScene("letter")}>
        *klik pelan* 🐾
      </button>
    </div>
  );
}

// =============================================
// SCENE 3 — Surat Ucapan + Permintaan Maaf
// =============================================
function SceneLetter({ setScene }) {
  const [noCount, setNoCount] = useState(0);

  const handleNo = () => {
    if (noCount === 0) {
      setScene("beg");
    } else {
      setScene("angry");
    }
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="scene letter-scene">
      <div className="letter-box">
        <h2>🌙 Selamat Hari Raya Idul Fitri 1446 H 🌙</h2>
        <p>
          ALOOOOO INDAAAAAA 🌸
          <br />
          <br />
          Anak teknik ya anti bikin kecewaa
          <br />
          Met hari rayaa yaa indaaaaa
          <br />
          <br />
          Maap yaaa Indaaaa klo aku ada salahh, tpi kek nya gaada ga sih 🤭. 
          <br />
          <br />
          Sama mo bilang makaciii yaaa indaaa udah nemeniin anak teknik dengan tugas2nya yang bejibun inii hehe.
          Idk how, tpi u affect me a lot. se stress apapun aku ama tugas, klo ngobrol sama kamu bawaannya tenang muluu.
          Ya, walaupun kita ga pernah ketemu secara langsung, tapi ngobrol sama kamu jarak jauh juga udaa bikin seneng.
          But, i hope someday kamu udahh ga maluu lagi ketemu sama akuu, trs kita bisa main bareng, nonton film di XXI, 
          AYCE sampe muntah, mukbang ramen di tsuka ramen, dan blaa blaa blaaa. Kamu sii malu2 kucing, oyaaa pantes kemarin 
          kamunya pake baju gambar kucing, orgnya aja malu2 kucing beginii. Tapi aku bener2 nunggu sampe kamu mauu, ga maksa akuuu, karena
          kamu tipikal orang yang gamau dipaksa2 gitu. Tapii kita harus ketemu yaaa ntah kapanpun ituu 🌷
          <br />
          <br />
          OYAAAAA, jangan lupa yaaa UNAIIIIRRRR!!!! Jangan UB!!!!
          Klo di UNAIR, nnti ku tulisin Laprak muuu seriusss!! Benerannn!! Reall!! Valid!!!
          <br />
          <br />
          Dah, mungkin itu ajaa yang pengen ku bilang, emmm <strong>someday klo kmu bosen sama aku, just say it yaa, jangan ngilangg, hehe.</strong>
          <br />
          <br />
          <em>Minal Aidin Wal Faizin 🌟</em>
        </p>
      </div>

      <div className="maaf-section">
        <p>Maap Lahir Batin yaaaaaaaaaa 🙏</p>
        <div className="btn-group">
          <button className="btn-yes" onClick={() => setScene("thanks")}>
            Iya dong 💚
          </button>
          <button className="btn-no" onClick={handleNo}>
            Tidak 🙅
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================
// SCENE 4 — Nailong Memohon
// =============================================
function SceneBeg({ setScene }) {
  return (
    <div className="scene">
      <img src="/nailong-beg.gif" alt="nailong beg" className="nailong-img" />
      <p className="instruction">
        Pleaseeee... Pencet yang IYA dong!!! 🥺🙏
      </p>
      <div className="btn-group">
        <button className="btn-yes" onClick={() => setScene("thanks")}>
          Iya dong 💚
        </button>
        <button className="btn-no" onClick={() => setScene("angry")}>
          Tidak 🙅
        </button>
      </div>
    </div>
  );
}

// =============================================
// SCENE 5 — Nailong Marah (2 tombol Iya)
// =============================================
function SceneAngry({ setScene }) {
  return (
    <div className="scene">
      <img src="/nailong-angry.gif" alt="nailong angry" className="nailong-img" />
      <p className="instruction">FINE!!! Maapin gaa! 😤</p>
      <div className="btn-group">
        <button className="btn-yes" onClick={() => setScene("thanks")}>
          Iya dong 💚
        </button>
        <button className="btn-yes" onClick={() => setScene("thanks")}>
          IYA DONGGGG
        </button>
      </div>
    </div>
  );
}

// =============================================
// SCENE 6 — Terima Kasih
// =============================================
function SceneThanks({ setScene }) {
  return (
    <div className="scene">
      <img src="/nailong-blush.gif" alt="nailong blush" className="nailong-img" />
      <p className="instruction">Makaciiii~ 🥰💕</p>
      <button className="click-btn" onClick={() => setScene("beauty")}>
        Lanjuuuut →
      </button>
    </div>
  );
}

// =============================================
// SCENE 7 — Cek Tingkat Kecantikan
// =============================================
function SceneBeauty({ setScene }) {
  const [nama, setNama] = useState("");
  const [error, setError] = useState(false);

  const handleCek = () => {
    if (!nama.trim()) {
      setError(true);
      return;
    }
    setScene("beauty_result");
  };

  return (
    <div className="scene">
      <h2>✨ Cek Tingkat Kecantikan! ✨</h2>
      <p className="instruction">Masukin Nama Lengkap Kamu Di Bawah</p>
      <input
        type="text"
        placeholder="Nama lengkap kamu..."
        value={nama}
        onChange={(e) => {
          setNama(e.target.value);
          setError(false);
        }}
        className="input-field"
      />
      {error && (
        <p className="error-text">Nama ga boleh kosong dong! 😤</p>
      )}
      <button className="click-btn" onClick={handleCek}>
        Cek ✨
      </button>
    </div>
  );
}

// =============================================
// SCENE 8 — Hasil Kecantikan
// =============================================
function SceneBeautyResult({ setScene }) {
  return (
    <div className="scene">
      <p className="big-text">📊 Hasil Analisis:</p>
      <p className="result-text">
        Maaf, tingkat kecantikan anda <strong>melampaui batas</strong>.
        <br />
        Sistem kami tidak sanggup menghitungnya. 💻💥
      </p>
      <button className="click-btn" onClick={() => setScene("calculus")}>
        Lanjut →
      </button>
    </div>
  );
}

// =============================================
// SCENE 9 — Soal Kalkulus Berhadiah THR
// =============================================
function SceneCalculus({ setScene }) {
  const [jawaban, setJawaban] = useState("");
  const [salah, setSalah] = useState(false);

  // ∫ e^x · sin(x) dx = e^x(sin(x) - cos(x)) / 2 + C
  const JAWABAN_BENAR = "e^x(sin(x) - cos(x))/2 + C";

  const handleSubmit = () => {
    const jawabanBersih = jawaban.trim().replace(/\s/g, "");
    const kunciBersih = JAWABAN_BENAR.replace(/\s/g, "");
    if (jawabanBersih === kunciBersih) {
      setScene("rekening");
    } else {
      setSalah(true);
    }
  };

  return (
    <div className="scene">
      <h2>🧮 Soal Berhadiah THR! 🎁</h2>
      <p className="instruction">
        Jawab soal berikut dengan benar untuk klaim THR kamu:
      </p>
      <div className="soal-box">
        <p>Tentukan hasil integral tak tentu berikut:</p>
        <p className="soal-text">∫ eˣ · sin(x) dx = ?</p>
        <p className="hint">
          Petunjuk: Gunakan metode integral parsial dua kali 👀
        </p>
        <p className="hint">
          Format jawaban: gunakan tanda "^" untuk menyatakan pangkat
        </p>
      </div>
      <input
        type="text"
        placeholder="Ketik jawaban kamu..."
        value={jawaban}
        onChange={(e) => {
          setJawaban(e.target.value);
          setSalah(false);
        }}
        className="input-field"
      />
      {salah && (
        <p className="error-text">
          Salah! Coba lagi, jangan nyerah! 😅
        </p>
      )}
      <button className="click-btn" onClick={handleSubmit}>
        Submit Jawaban 🚀
      </button>
    </div>
  );
}

// =============================================
// SCENE 10 — Input Rekening & Kirim ke Sheets
// =============================================
function SceneRekening() {
  const [nama, setNama] = useState("");
  const [noRek, setNoRek] = useState("");
  const [noEwallet, setNoEwallet] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleKirim = async () => {
    if (!nama.trim() || !noRek.trim() || !noEwallet.trim()) {
      alert("Semua field harus diisi ya! 😤");
      return;
    }

    setStatus("loading");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, noRek, noEwallet }),
      });
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="scene">
        <p className="big-text">🎉 Yeay! THR Segera Dikirim!</p>
        <p className="result-text">
          Makaciiii dedeeee~
          <br />
          Ditunggu ya transfernya! 💸😄
        </p>
      </div>
    );
  }

  return (
    <div className="scene">
      <h2>💸 Klaim THR Kamu!</h2>
      <p className="instruction">Isi data berikut ya biar THR-nya bisa dikirim:</p>

      <input
        className="input-field"
        type="text"
        placeholder="Nama Lengkap"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Nomor Rekening Bank"
        value={noRek}
        onChange={(e) => setNoRek(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Nomor E-Wallet (GoPay / OVO / Dana)"
        value={noEwallet}
        onChange={(e) => setNoEwallet(e.target.value)}
      />

      <button
        className="click-btn"
        onClick={handleKirim}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Mengirim... ⏳" : "Kirim & Klaim THR 🎁"}
      </button>

      {status === "error" && (
        <p className="error-text">
          Gagal mengirim data, coba lagi! 😢
        </p>
      )}
    </div>
  );
}

export default App;