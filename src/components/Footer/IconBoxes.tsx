import award1 from "../../assets/testsieger-bild.png";
import award2 from "../../assets/sammelbild_rahmen.png";
import award3 from "../../assets/handelsblatt_siegel.png";

export const IconBoxes = () => {
  return (
    <div className="footer-box">
      <div className="footer-info">
        <h3>Susu Shop</h3>
        <p>
          Willkommen im Schuh-Onlineshop Deutschlands Nr. 1 für B2B Kunden mit
          über 7 Mio. zufriedenen Kunden. Unser Shop bietet Ihnen eine breite
          Auswahl an Schuhen für Damen, Herren und Kinder zu günstigen Preisen
          direkt vom Großhandel. Doch das ist noch nicht alles, denn wir haben
          auch einige tolle GRATIS Geschenke für Sie! Ab einem Nettowarenwert
          von 20 Euro erhalten Sie von uns verschiedene GRATIS Produkte wie
          Kekse, Schokolade, Fruchtgummis und Kaffee. Unser Sortiment umfasst
          eine große Auswahl an Schuhen für jeden Anlass, von eleganten High
          Heels und Business-Schuhen bis hin zu sportlichen Sneakers und
          bequemen Sandalen. Unsere Schuhe stammen von namhaften Herstellern wie
          Adidas, Nike, Puma, Reebok und vielen mehr. Auch für die Kleinsten
          haben wir eine große Auswahl an Kinderschuhen, die nicht nur modisch
          sind, sondern auch bequem und funktional. Als B2B-Kunde wissen Sie,
          dass schnelle Lieferzeiten entscheidend sind. Bei einer
          Online-Bestellung bis 17.00 Uhr (Montag bis Freitag) geht Lagerware
          bei uns noch am selben Tag in den Versand. So sind Ihre Schuhe nicht
          nur schnell und einfach online bestellt, sondern auch im Handumdrehen
          auf dem Weg zu Ihnen. Auch vielfältige Zahlungsmöglichkeiten spielen
          bei der Auswahl des richtigen Anbieters eine entscheidende Rolle: Bei
          uns können Sie Ihren Einkauf auf Rechnung bestellen, aber auch per
          Lastschrift, PayPal, Kreditkarte, Sofortüberweisung, Paydirekt oder
          Vorkasse zahlen. Wir legen großen Wert auf die Qualität unserer
          Produkte und arbeiten nur mit den besten Herstellern zusammen. Unsere
          Schuhe sind nicht nur modisch und stylisch, sondern auch langlebig und
          strapazierfähig. Als Kunde bei uns stehen Sie an erster Stelle, und
          das zeigt auch unsere Auszeichnung als 1. Platz für beste
          Servicequalität (Kategorie Schuhe) bei Testbild. Bestellen Sie noch
          heute bei uns und profitieren Sie von unserem großen Angebot,
          günstigen Preisen und schnellen Lieferzeiten. Sollten Sie doch einmal
          unzufrieden sein, ermöglicht die einfache und kostenlose
          Online-Rücksendung einen reibungslosen Ablauf.
        </p>
      </div>

      <div className="awards">
        <div className="awards-tumb">
          <img src={award1} alt="Geprute Leitungen" />
        </div>
        <div className="awards-tumb">
          <img src={award3} alt="Geprute Leitungen" />
        </div>
        <div className="awards-tumb">
          <img src={award2} alt="Geprute Leitungen" />
        </div>
      </div>
    </div>
  );
};
