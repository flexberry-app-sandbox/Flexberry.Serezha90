package Serezha90.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha90.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказы
 */
@Entity(name = "IISSerezha90Заказы")
@Table(schema = "public", name = "Заказы")
public class Zakazy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаказа")
    private Integer кодзаказа;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Время")
    private String время;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "ТипВручения")
    private String типвручения;

    @Column(name = "КолПерсон")
    private Integer колперсон;

    @Column(name = "Комментарий")
    private String комментарий;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "КодЗазака")
    private Integer кодзазака;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomera")
    @Convert("Nomera")
    @Column(name = "Номера", length = 16, unique = true, nullable = false)
    private UUID _nomeraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomera", insertable = false, updatable = false)
    private Nomera nomera;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakazy")
    @Convert("Zakazy")
    @Column(name = "Заказы", length = 16, unique = true, nullable = false)
    private UUID _zakazyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakazy", insertable = false, updatable = false)
    private Zakazy zakazy;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazBlyud> zakazblyuds;

    @OneToMany(mappedBy = "zakazy", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazNapitkov> zakaznapitkovs;


    public Zakazy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаказа() {
      return кодзаказа;
    }

    public void setКодЗаказа(Integer кодзаказа) {
      this.кодзаказа = кодзаказа;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public String getТипВручения() {
      return типвручения;
    }

    public void setТипВручения(String типвручения) {
      this.типвручения = типвручения;
    }

    public Integer getКолПерсон() {
      return колперсон;
    }

    public void setКолПерсон(Integer колперсон) {
      this.колперсон = колперсон;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public Integer getКодЗазака() {
      return кодзазака;
    }

    public void setКодЗазака(Integer кодзазака) {
      this.кодзазака = кодзазака;
    }


}